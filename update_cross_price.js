const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');

  // We are replacing the specific line inside toggleBundle
  const targetLine = "if (crossElem) crossElem.innerText = (baseCross + extraPrice) + 'K+';";
  
  const replacementLines = `
      let extraCross = extraPrice;
      if (extraPrice === 50) extraCross = 80;
      else if (extraPrice === 300 || extraPrice === 320 || extraPrice === 350) extraCross = 350;
      if (crossElem) crossElem.innerText = (baseCross + extraCross) + 'K+';`;
      
  html = html.replace(targetLine, replacementLines);
  
  fs.writeFileSync('index.html', html);
  console.log('Successfully updated toggleBundle cross logic');
} catch(e) { console.log(e); }
