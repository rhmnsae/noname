const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DEMO_DIR = path.join(__dirname, 'demo');
const OUTPUT_DIR = path.join(__dirname, 'demos'); // New single folder
const INDEX_HTML_PATH = path.join(__dirname, 'index.html');

// Create output dir if not exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Ensure the index.html exists
if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error("index.html not found at", INDEX_HTML_PATH);
    process.exit(1);
}

let indexHtmlContent = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

const demoFolders = fs.readdirSync(DEMO_DIR).filter(item => {
    return fs.statSync(path.join(DEMO_DIR, item)).isDirectory();
});

let updatedCount = 0;

demoFolders.forEach(folder => {
    const folderPath = path.join(DEMO_DIR, folder);
    const indexPath = path.join(folderPath, 'index.html');
    
    if (fs.existsSync(indexPath)) {
        // Read original html
        let originalHtml = fs.readFileSync(indexPath, 'utf-8');
        
        // Inline CSS (style.css)
        const styleCssPath = path.join(folderPath, 'style.css');
        if (fs.existsSync(styleCssPath)) {
            const cssContent = fs.readFileSync(styleCssPath, 'utf-8');
            originalHtml = originalHtml.replace(/<link[^>]*href=["'](?:\.\/)?style\.css["'][^>]*>/i, `<style>${cssContent}</style>`);
        }
        
        // Inline JS (script.js)
        const scriptJsPath = path.join(folderPath, 'script.js');
        if (fs.existsSync(scriptJsPath)) {
            const jsContent = fs.readFileSync(scriptJsPath, 'utf-8');
            originalHtml = originalHtml.replace(/<script[^>]*src=["'](?:\.\/)?script\.js["'][^>]*><\/script>/i, `<script>${jsContent}</script>`);
        }
        
        // We DON'T replace ../../assets/ because the new structure is also depth 2 (demos/d_hash/index.html).
        
        // Generate a random name
        const randomHash = crypto.randomBytes(6).toString('hex');
        const obfuscatedFolderObj = `d_${randomHash}`;
        
        // Create the individual demo subfolder
        const outputDemoDir = path.join(OUTPUT_DIR, obfuscatedFolderObj);
        if (!fs.existsSync(outputDemoDir)) {
            fs.mkdirSync(outputDemoDir, { recursive: true });
        }
        
        const outputHtmlPath = path.join(outputDemoDir, 'index.html');
        
        // Base64 encode the HTML content directly from utf-8 buffer
        const base64Encoded = Buffer.from(originalHtml, 'utf-8').toString('base64');
        
        // Wrap it in a simple script to render it dynamically, adding some basic JS obfuscation
        const wrappedHtml = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Demo</title>
<script>
(function(){
    var _0xabc = "${base64Encoded}";
    document.write(decodeURIComponent(escape(atob(_0xabc))));
    document.close();
})();
</script>
</head>
<body>
</body>
</html>`;

        // Write to new folder
        fs.writeFileSync(outputHtmlPath, wrappedHtml);
        
        const regex1 = new RegExp(`href=["']demo\/${folder}\/?["']`, 'g');
        const regex2 = new RegExp(`href=["']\.\/demo\/${folder}\/?["']`, 'g');
        const regex3 = new RegExp(`window\\.open\\(['"]demo\/${folder}\/?['"]`, 'g');
        const regex4 = new RegExp(`window\\.open\\(['"]\\.\/demo\/${folder}\/?['"]`, 'g');
        
        if (regex1.test(indexHtmlContent) || regex2.test(indexHtmlContent) || regex3.test(indexHtmlContent) || regex4.test(indexHtmlContent)) {
            indexHtmlContent = indexHtmlContent.replace(regex1, `href="demos/${obfuscatedFolderObj}/"`);
            indexHtmlContent = indexHtmlContent.replace(regex2, `href="./demos/${obfuscatedFolderObj}/"`);
            indexHtmlContent = indexHtmlContent.replace(regex3, `window.open('demos/${obfuscatedFolderObj}/'`);
            indexHtmlContent = indexHtmlContent.replace(regex4, `window.open('./demos/${obfuscatedFolderObj}/'`);
            updatedCount++;
            console.log(`Updated link for ${folder} -> demos/${obfuscatedFolderObj}/`);
        } else {
            console.log(`Warning: Link for ${folder} not found in index.html`);
        }
    }
});

fs.writeFileSync(INDEX_HTML_PATH, indexHtmlContent);
console.log(`Successfully obfuscated demos to Subfolders. Updated ${updatedCount} links in index.html.`);
