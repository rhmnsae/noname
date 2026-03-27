const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');

  html = html.replace('<div class="price-amount">99K+</div>', '<div class="price-amount" id="amount_a">99K+</div>');
  html = html.replace('<div class="price-amount">250K+</div>', '<div class="price-amount" id="amount_b">250K+</div>');
  html = html.replace('<div class="price-amount">650K+</div>', '<div class="price-amount" id="amount_c">650K+</div>');

  html = html.replace(
    '<a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_a_cta_random">+ Domain Random (Total 149K)</a>',
    '<a href="javascript:void(0)" onclick="toggleBundle(\'a\', 99, 50, this)" class="btn btn-bundle" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:transparent; color:#dc2626; border:2px solid #dc2626;" data-t="price_a_cta_random">+ Domain Random (50K)</a>'
  );
  html = html.replace(
    '<a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px;" data-t="price_a_cta_custom">+ Domain .com/.id (Total 399K)</a>',
    '<a href="javascript:void(0)" onclick="toggleBundle(\'a\', 99, 300, this)" class="btn btn-bundle" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px; background:transparent; color:#dc2626; border:2px solid #dc2626;" data-t="price_a_cta_custom">+ Domain .com/.id/.net (300K)</a>'
  );

  html = html.replace(
    '<a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:#fff; color:#000; border:2px solid #000;" data-t="price_b_cta_random">+ Domain Random (Total 300K)</a>',
    '<a href="javascript:void(0)" onclick="toggleBundle(\'b\', 250, 50, this)" class="btn btn-bundle" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:transparent; color:#dc2626; border:2px solid #dc2626;" data-t="price_b_cta_random">+ Domain Random (50K)</a>'
  );
  html = html.replace(
    '<a href="#kontak" class="btn btn-dark" style="font-size:0.75rem; padding:8px; display:block; background:#fff; color:#000; border:2px solid #000; margin-bottom:16px;" data-t="price_b_cta_custom">+ Domain .com/.id (Total 550K)</a>',
    '<a href="javascript:void(0)" onclick="toggleBundle(\'b\', 250, 300, this)" class="btn btn-bundle" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px; background:transparent; color:#dc2626; border:2px solid #dc2626;" data-t="price_b_cta_custom">+ Domain .com/.id/.net (300K)</a>'
  );

  html = html.replace(
    '<a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block;" data-t="price_c_cta_random">+ Domain Random (Total 700K)</a>',
    '<a href="javascript:void(0)" onclick="toggleBundle(\'c\', 650, 50, this)" class="btn btn-bundle" style="font-size:0.75rem; padding:8px; margin-bottom:8px; display:block; background:transparent; color:#dc2626; border:2px solid #dc2626;" data-t="price_c_cta_random">+ Domain Random (50K)</a>'
  );
  html = html.replace(
    '<a href="#kontak" class="btn btn-outline" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px;" data-t="price_c_cta_custom">+ Domain .com/.id (Total 950K)</a>',
    '<a href="javascript:void(0)" onclick="toggleBundle(\'c\', 650, 300, this)" class="btn btn-bundle" style="font-size:0.75rem; padding:8px; display:block; margin-bottom:16px; background:transparent; color:#dc2626; border:2px solid #dc2626;" data-t="price_c_cta_custom">+ Domain .com/.id/.net (300K)</a>'
  );

  if (!html.includes('toggleBundle(')) {
    const scriptTag = `
<script>
  function toggleBundle(pkg, baseVal, extraPrice, btnElem) {
    let container = btnElem.parentElement;
    let amountElem = document.getElementById('amount_' + pkg);
    if (!amountElem) return;
    
    if (btnElem.classList.contains('active-bundle')) {
      btnElem.classList.remove('active-bundle');
      btnElem.style.background = 'transparent';
      btnElem.style.color = '#dc2626';
      amountElem.innerText = baseVal + 'K+';
    } else {
      let siblings = container.querySelectorAll('.btn-bundle');
      siblings.forEach(sib => {
        sib.classList.remove('active-bundle');
        sib.style.background = 'transparent';
        sib.style.color = '#dc2626';
      });
      btnElem.classList.add('active-bundle');
      btnElem.style.background = '#dc2626';
      btnElem.style.color = '#fff';
      amountElem.innerText = (baseVal + extraPrice) + 'K+';
    }
  }
</script>
</body>`;
    html = html.replace('</body>', scriptTag);
  }

  fs.writeFileSync('index.html', html);

  ['assets/js/script.src.js', 'assets/js/script.js'].forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    c = c.replace(/\+ Domain Random \(Total 149K\)/g, '+ Domain Random (50K)');
    c = c.replace(/\+ Domain \.com\/\.id \(Total 399K\)/g, '+ Domain .com/.id/.net (300K)');
    
    c = c.replace(/\+ Domain Random \(Total 300K\)/g, '+ Domain Random (50K)');
    c = c.replace(/\+ Domain \.com\/\.id \(Total 550K\)/g, '+ Domain .com/.id/.net (300K)');
    
    c = c.replace(/\+ Domain Random \(Total 700K\)/g, '+ Domain Random (50K)');
    c = c.replace(/\+ Domain \.com\/\.id \(Total 950K\)/g, '+ Domain .com/.id/.net (300K)');

    c = c.replace(/\+ Random Domain \(Total 149K\)/g, '+ Random Domain (50K)');
    c = c.replace(/\+ \.com\/\.id Domain \(Total 399K\)/g, '+ .com/.id/.net Domain (300K)');
    
    c = c.replace(/\+ Random Domain \(Total 300K\)/g, '+ Random Domain (50K)');
    c = c.replace(/\+ \.com\/\.id Domain \(Total 550K\)/g, '+ .com/.id/.net Domain (300K)');
    
    c = c.replace(/\+ Random Domain \(Total 700K\)/g, '+ Random Domain (50K)');
    c = c.replace(/\+ \.com\/\.id Domain \(Total 950K\)/g, '+ .com/.id/.net Domain (300K)');

    fs.writeFileSync(f, c);
  });

  console.log('Update interactive JS successful');
} catch (e) {
  console.log('Error:', e);
}
