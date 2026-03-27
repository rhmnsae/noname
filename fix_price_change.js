const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');

  // Add IDs to Crossed Prices so we can modify them
  html = html.replace('250K+</div>', '250K+</div>').replace(
    'letter-spacing:0.02em;">\n            250K+</div>',
    'letter-spacing:0.02em;" id="cross_a">\n            250K+</div>'
  );
  html = html.replace(
    'letter-spacing:0.02em;">\n            450K+</div>',
    'letter-spacing:0.02em;" id="cross_b">\n            450K+</div>'
  );
  html = html.replace(
    'letter-spacing:0.02em;">\n            900K+</div>',
    'letter-spacing:0.02em;" id="cross_c">\n            900K+</div>'
  );
  
  // Wait, the string replace might not match line breaks if the carriage returns are different.
  // Instead, let's just do a RegExp replace targeting the exact strings.
  html = html.replace(/>\s*250K\+<\/div>/, ' id="cross_a">250K+</div>');
  html = html.replace(/>\s*450K\+<\/div>/, ' id="cross_b">450K+</div>');
  html = html.replace(/>\s*900K\+<\/div>/, ' id="cross_c">900K+</div>');

  // Let's add the script before </body>
  const jsCode = `
<script>
  function toggleBundle(pkg, baseVal, extraPrice, btnElem) {
    let container = btnElem.parentElement;
    let amountElem = document.getElementById('amount_' + pkg);
    let crossElem = document.getElementById('cross_' + pkg);
    
    // Determine the base crossed price
    let baseCross = 0;
    if (pkg === 'a') baseCross = 250;
    if (pkg === 'b') baseCross = 450;
    if (pkg === 'c') baseCross = 900;
    
    if (!amountElem) return;
    
    // Toggle logic
    if (btnElem.classList.contains('active-bundle')) {
      // Turn OFF
      btnElem.classList.remove('active-bundle');
      btnElem.style.background = 'transparent';
      btnElem.style.color = '#dc2626';
      
      amountElem.innerText = baseVal + 'K+';
      if (crossElem) crossElem.innerText = baseCross + 'K+';
    } else {
      // Turn ON
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
      if (crossElem) crossElem.innerText = (baseCross + extraPrice) + 'K+';
    }
  }
</script>
</body>`;

  // Remove existing toggleBundle script if it was somehow injected
  html = html.replace(/<script>\s*function toggleBundle[\s\S]*?<\/script>/, '');

  html = html.replace('</body>', jsCode);

  fs.writeFileSync('index.html', html);
  console.log('Fixed JS interactive pricing');
} catch(e) {
  console.log(e);
}
