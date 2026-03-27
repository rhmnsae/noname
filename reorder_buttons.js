const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const items = [
  {
    target: `<a href="#kontak" class="btn btn-outline" data-t="price_a_cta">Ambil Paket A</a>
          <div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_a_cta_random">+ Domain Random (Total 149K)</a>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block;" data-t="price_a_cta_custom">+ Domain .com/.id (Total 399K)</a>`,
    replacement: `<div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_a_cta_random">+ Domain Random (Total 149K)</a>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px;" data-t="price_a_cta_custom">+ Domain .com/.id (Total 399K)</a>
          <a href="#kontak" class="btn btn-outline" data-t="price_a_cta">Ambil Paket A</a>`
  },
  {
    target: `<a href="#kontak" class="btn btn-dark" data-t="price_b_cta">Ambil Paket B</a>
          <div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:#fff; color:#000; border:2px solid #000;" data-t="price_b_cta_random">+ Domain Random (Total 300K)</a>
          <a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; display:block; background:#fff; color:#000; border:2px solid #000;" data-t="price_b_cta_custom">+ Domain .com/.id (Total 550K)</a>`,
    replacement: `<div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:#fff; color:#000; border:2px solid #000;" data-t="price_b_cta_random">+ Domain Random (Total 300K)</a>
          <a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; display:block; background:#fff; color:#000; border:2px solid #000; margin-bottom:16px;" data-t="price_b_cta_custom">+ Domain .com/.id (Total 550K)</a>
          <a href="#kontak" class="btn btn-dark" data-t="price_b_cta">Ambil Paket B</a>`
  },
  {
    target: `<a href="#kontak" class="btn btn-outline" data-t="price_c_cta">Ambil Paket C</a>
          <div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_c_cta_random">+ Domain Random (Total 700K)</a>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block;" data-t="price_c_cta_custom">+ Domain .com/.id (Total 950K)</a>`,
    replacement: `<div style="font-size:0.7rem; font-weight:700; margin:16px 0 8px; letter-spacing:0px; color:var(--text-muted);" data-t="price_bundle_label">+ BUNDLING (DISKON SETUP HOSTING):</div>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_c_cta_random">+ Domain Random (Total 700K)</a>
          <a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px;" data-t="price_c_cta_custom">+ Domain .com/.id (Total 950K)</a>
          <a href="#kontak" class="btn btn-outline" data-t="price_c_cta">Ambil Paket C</a>`
  }
];

items.forEach(item => {
  html = html.replace(item.target, item.replacement);
});

fs.writeFileSync('index.html', html);
console.log('Reordered bundle buttons successfully');
