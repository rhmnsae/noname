const fs = require('fs');

const files = ['assets/js/script.src.js', 'assets/js/script.js'];
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Indonesian
  c = c.replace(/pricing_random_annual:\s*"GRATIS"/g, 'pricing_random_annual: "IDR 150.000 / thn"');
  c = c.replace(/Tidak ada biaya tahunan/g, 'Biaya tahunan sangat terjangkau');
  
  // English
  c = c.replace(/pricing_random_annual:\s*"FREE"/g, 'pricing_random_annual: "IDR 150.000 / yr"');
  c = c.replace(/No annual fee/g, 'Highly affordable annual fee');
  
  fs.writeFileSync(f, c);
});

const indexFile = 'index.html';
let html = fs.readFileSync(indexFile, 'utf8');
html = html.replace(
  '<td style="padding:16px 32px; border-left:2px solid var(--border); font-weight:800; color:#16a34a; letter-spacing:0.05em;" data-t="pricing_random_annual">GRATIS</td>',
  '<td style="padding:16px 32px; border-left:2px solid var(--border); font-weight:700;" data-t="pricing_random_annual">IDR 150.000 / thn</td>'
);
fs.writeFileSync(indexFile, html);

console.log('Replaced via replacer.js');
