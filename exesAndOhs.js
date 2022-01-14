function XO(str) {
  let xCounter = 0;
  let oCounter = 0;
  const xRegexp = new RegExp('x', 'i');
  const oRegexp = new RegExp('o', 'i');
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter.match(xRegexp)) {
      xCounter++;
    } else if (letter.match(oRegexp)) {
      oCounter++;
    }
  }
  return xCounter === oCounter;
}

console.log(XO('xxOo'));
