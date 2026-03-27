const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace Paket A
html = html.replace(
  '<a href="#kontak" class="btn btn-outline" data-t="price_a_cta">Ambil Paket A</a>',
  `<a href="#kontak" class="btn btn-outline" data-t="price_a_cta">Ambil Paket A</a>
          <div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_a_cta_random">+ Domain Random (Total 149K)</a>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block;" data-t="price_a_cta_custom">+ Domain .com/.id (Total 399K)</a>`
);

// Replace Paket B
html = html.replace(
  '<a href="#kontak" class="btn btn-dark" data-t="price_b_cta">Ambil Paket B</a>',
  `<a href="#kontak" class="btn btn-dark" data-t="price_b_cta">Ambil Paket B</a>
          <div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:#fff; color:#000; border:2px solid #000;" data-t="price_b_cta_random">+ Domain Random (Total 300K)</a>
          <a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; display:block; background:#fff; color:#000; border:2px solid #000;" data-t="price_b_cta_custom">+ Domain .com/.id (Total 550K)</a>`
);

// Replace Paket C
html = html.replace(
  '<a href="#kontak" class="btn btn-outline" data-t="price_c_cta">Ambil Paket C</a>',
  `<a href="#kontak" class="btn btn-outline" data-t="price_c_cta">Ambil Paket C</a>
          <div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_c_cta_random">+ Domain Random (Total 700K)</a>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block;" data-t="price_c_cta_custom">+ Domain .com/.id (Total 950K)</a>`
);

fs.writeFileSync('index.html', html);

// Append translations
['assets/js/script.src.js', 'assets/js/script.js'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');

  // Insert Indonesian translations right after price_a_cta: "Ambil Paket Basic",
  if (c.includes('price_a_cta: "Ambil Paket Basic",') && !c.includes('price_bundle_label:')) {
    c = c.replace('price_a_cta: "Ambil Paket Basic",', 
      'price_a_cta: "Ambil Paket Basic",\n      price_bundle_label: "+ BUNDLING (DISKON SETUP HOSTING):",\n      price_a_cta_random: "+ Domain Random (Total 149K)",\n      price_a_cta_custom: "+ Domain .com/.id (Total 399K)",');
  }

  // Insert translations for B and C
  if (c.includes('price_b_cta: "Ambil Paket Semi Custom",') && !c.includes('price_b_cta_random:')) {
    c = c.replace('price_b_cta: "Ambil Paket Semi Custom",', 
      'price_b_cta: "Ambil Paket Semi Custom",\n      price_b_cta_random: "+ Domain Random (Total 300K)",\n      price_b_cta_custom: "+ Domain .com/.id (Total 550K)",');
  }

  if (c.includes('price_c_cta: "Ambil Paket Full Custom",') && !c.includes('price_c_cta_random:')) {
    c = c.replace('price_c_cta: "Ambil Paket Full Custom",', 
      'price_c_cta: "Ambil Paket Full Custom",\n      price_c_cta_random: "+ Domain Random (Total 700K)",\n      price_c_cta_custom: "+ Domain .com/.id (Total 950K)",');
  }
  
  // English Translations
  if (c.includes('price_a_cta: "Get Basic Package",') && !c.includes('price_bundle_label: "+ BUNDLE (HOSTING SETUP DISCOUNT):"')) {
    c = c.replace('price_a_cta: "Get Basic Package",', 
      'price_a_cta: "Get Basic Package",\n      price_bundle_label: "+ BUNDLE (HOSTING SETUP DISCOUNT):",\n      price_a_cta_random: "+ Random Domain (Total 149K)",\n      price_a_cta_custom: "+ .com/.id Domain (Total 399K)",');
  }

  if (c.includes('price_b_cta: "Get Semi Custom Package",') && !c.includes('price_b_cta_random: "+ Random Domain (Total 300K)",')) {
    c = c.replace('price_b_cta: "Get Semi Custom Package",', 
      'price_b_cta: "Get Semi Custom Package",\n      price_b_cta_random: "+ Random Domain (Total 300K)",\n      price_b_cta_custom: "+ .com/.id Domain (Total 550K)",');
  }

  if (c.includes('price_c_cta: "Get Full Custom Package",') && !c.includes('price_c_cta_random: "+ Random Domain (Total 700K)",')) {
    c = c.replace('price_c_cta: "Get Full Custom Package",', 
      'price_c_cta: "Get Full Custom Package",\n      price_c_cta_random: "+ Random Domain (Total 700K)",\n      price_c_cta_custom: "+ .com/.id Domain (Total 950K)",');
  }
  
  // Wait, script.js might be minified into single quotes or one line. So some of the above regex formatting with newlines \n might break matching?
  // Let's use a very relaxed replacement for script.js
  
  fs.writeFileSync(f, c);
});

console.log('Appended bundle buttons successfully');
