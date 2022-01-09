function isIsogram(str) {
  for (let letter of str) {
    let str1 = str.toLowerCase();
    if (str1.indexOf(letter) !== str1.lastIndexOf(letter)) return false;
  }
  return true;
}

console.log(isIsogram('moOse'));
