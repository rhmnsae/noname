const fs = require('fs');
['assets/js/script.src.js', 'assets/js/script.js'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/pricing_random_pros:\s*"\\u2022 Biaya tahunan sangat terjangkau<br>\\u2022 Setup cepat & mudah"/g, 
                'pricing_random_pros: "\\u2022 Biaya tahunan sangat terjangkau<br>\\u2022 Setup cepat & mudah<br>\\u2022 Cocok untuk portfolio"');
  c = c.replace(/pricing_random_pros:\s*"\\u2022 Highly affordable annual fee<br>\\u2022 Fast & easy setup"/g, 
                'pricing_random_pros: "\\u2022 Highly affordable annual fee<br>\\u2022 Fast & easy setup<br>\\u2022 Great for portfolio"');
  fs.writeFileSync(f, c);
});
console.log('Fixed portfolio text logic');
