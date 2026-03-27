const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');
  html = html.replace(/\+ Domain Random \(50K\)/g, "+ Domain Random (<s style='opacity:0.6;font-size:0.9em;'>80K</s> 50K)");
  html = html.replace(/\+ Domain \.com\/\.id\/\.net \(300K\)/g, "+ Domain .com/.id/.net (<s style='opacity:0.6;font-size:0.9em;'>350K</s> 300K)");
  fs.writeFileSync('index.html', html);

  ['assets/js/script.src.js', 'assets/js/script.js'].forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/\+ Domain Random \(50K\)/g, "+ Domain Random (<s style='opacity:0.6;font-size:0.9em;'>80K</s> 50K)");
    c = c.replace(/\+ Domain \.com\/\.id\/\.net \(300K\)/g, "+ Domain .com/.id/.net (<s style='opacity:0.6;font-size:0.9em;'>350K</s> 300K)");
    
    c = c.replace(/\+ Random Domain \(50K\)/g, "+ Random Domain (<s style='opacity:0.6;font-size:0.9em;'>80K</s> 50K)");
    c = c.replace(/\+ \.com\/\.id\/\.net Domain \(300K\)/g, "+ .com/.id/.net Domain (<s style='opacity:0.6;font-size:0.9em;'>350K</s> 300K)");
    fs.writeFileSync(f, c);
  });
  console.log('Successfully updated discount strings via node.js script');
} catch (e) {
  console.log(e);
}
