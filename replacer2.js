const fs = require('fs');
const files = ['assets/js/script.src.js', 'assets/js/script.js'];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  
  // Indonesian
  c = c.replace(/Bebas pilih ekstensi \(\.com, \.id, dll\)/g, 'Bebas pilih ekstensi (.com, .id, .net)');
  
  // English
  c = c.replace(/Choose any extension \(\.com, \.id, etc\.\)/g, 'Choose any extension (.com, .id, .net)');
  
  fs.writeFileSync(f, c);
});

console.log('Replaced dll to .net in js files');
