// var fatFingers = function (str) {
//   if (!str) return str;

//   let isCapsLocked = false;
//   let result = str.split('').reduce((acc, char) => {
//     console.log('char:', char, 'acc:', acc);
//     if (char.toUpperCase() === 'A') {
//       isCapsLocked = !isCapsLocked;
//       return acc;
//     }
//     if (isCapsLocked) {
//       char =
//         char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     }
//     acc += char;
//     console.log('char1:', char, 'acc1:', acc);
//     return acc;
//   }, '');
//   return result;
// };
// abABaBabAb
function fatFingers(string) {
  let fatFingered = '',
    capitalize = false;

  if (!string || string == '') {
    return string;
  }
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter == 'a' || letter == 'A') {
      capitalize = !capitalize;
      continue;
    }
    fatFingered += capitalize
      ? letter == letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
      : letter;
  }
  return fatFingered;
}

console.log(fatFingers('abABaBabAb'));
