const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');
  
  // Package A changes
  html = html.replace(
    'onclick="toggleBundle(\'a\', 99, 300, this)"',
    'onclick="toggleBundle(\'a\', 99, 350, this)"'
  );
  html = html.replace(
    'data-t="price_a_cta_custom">+ Domain .com/.id/.net (<s style=\'opacity:0.6;font-size:0.9em;\'>350K</s> 300K)</a>',
    'data-t="price_a_cta_custom">+ Domain .com/.id/.net (350K)</a>'
  );

  // Package B changes
  html = html.replace(
    'onclick="toggleBundle(\'b\', 250, 300, this)"',
    'onclick="toggleBundle(\'b\', 250, 320, this)"'
  );
  html = html.replace(
    'data-t="price_b_cta_custom">+ Domain .com/.id/.net (<s style=\'opacity:0.6;font-size:0.9em;\'>350K</s> 300K)</a>',
    'data-t="price_b_cta_custom">+ Domain .com/.id/.net (<s style=\'opacity:0.6;font-size:0.9em;\'>350K</s> 320K)</a>'
  );
  
  fs.writeFileSync('index.html', html);

  ['assets/js/script.src.js', 'assets/js/script.js'].forEach(f => {
    let c = fs.readFileSync(f, 'utf8');

    // Replace the specific keys for Indonesian and English in `script.src.js` / `script.js`
    
    // Package A
    c = c.replace(
      /price_a_cta_custom:\s*"\+ Domain \.com\/\.id\/\.net \(<s style='opacity:0\.6;font-size:0\.9em;'>350K<\/s> 300K\)"/g,
      'price_a_cta_custom: "+ Domain .com/.id/.net (350K)"'
    );
    c = c.replace(
      /price_a_cta_custom:\s*"\+ \.com\/\.id\/\.net Domain \(<s style='opacity:0\.6;font-size:0\.9em;'>350K<\/s> 300K\)"/g,
      'price_a_cta_custom: "+ .com/.id/.net Domain (350K)"'
    );

    // Package B
    c = c.replace(
      /price_b_cta_custom:\s*"\+ Domain \.com\/\.id\/\.net \(<s style='opacity:0\.6;font-size:0\.9em;'>350K<\/s> 300K\)"/g,
      'price_b_cta_custom: "+ Domain .com/.id/.net (<s style=\'opacity:0.6;font-size:0.9em;\'>350K</s> 320K)"'
    );
    c = c.replace(
      /price_b_cta_custom:\s*"\+ \.com\/\.id\/\.net Domain \(<s style='opacity:0\.6;font-size:0\.9em;'>350K<\/s> 300K\)"/g,
      'price_b_cta_custom: "+ .com/.id/.net Domain (<s style=\'opacity:0.6;font-size:0.9em;\'>350K</s> 320K)"'
    );

    fs.writeFileSync(f, c);
  });
  console.log('Successfully adjusted custom domain pricing across packages');
} catch(e) { console.log(e); }
