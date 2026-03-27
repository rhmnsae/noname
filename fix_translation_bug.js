const fs = require('fs');

try {
  let c = fs.readFileSync('assets/js/script.js', 'utf8');
  c = c.replace('price_b_discount: "DISKON 44%", price_b_discount: "44% OFF",', 'price_b_discount: "DISKON 44%",');
  c = c.replace('price_a_discount: "DISKON 60%", price_a_discount: "DISKON 60%",', 'price_a_discount: "DISKON 60%",');
  fs.writeFileSync('assets/js/script.js', c);
  console.log('Fixed duplicate translation keys');
} catch (e) {
  console.error(e);
}
