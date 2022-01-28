// String.prototype.toJadenCase = function () {
//   //...
//   console.log(this);
//   return this.toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

String.prototype.toJadenCase = function () {
  //...
  // a place to store the jadenCaseStr
  let jadenCase = '';
  // a place to store whether the next letter we encounter should be capitalized
  // always capitalize the first letter of the string
  let capitalize = true;
  // iterate over each character in the string
  for (let i = 0; i < this.length; i++) {
    const letter = this[i];
    //// if the current character is a space,
    ////// next lettere should  be capitalized
    if (letter === ' ') {
      capitalize = true;
      jadenCase += ' ';
    } else {
      //// append either the letter itself, or capitalized letter
      if (capitalize) {
        jadenCase += letter.toUpperCase();
        capitalize = false; // we don't want tocapitalize the next letter
      } else {
        jadenCase += letter.toLowerCase();
      }
    }
  }
  return jadenCase;
};

let str = 'mamma della mamma';
console.log(str.toJadenCase());
