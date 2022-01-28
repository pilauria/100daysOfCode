const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// function averageWordLength(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   console.log(arr.join('').length);
//   return arr.join('').length / arr.length;
// }

function averageWordLength(arr) {
  if (arr.length === 0) {
    return null;
  }
  let wordLengths = [];
  for (let i = 0; i < arr.length; i++) {
    wordLengths.push(wordsArr[i].length);
  }
  let letterCount = 0;
  for (let i = 0; i < wordLengths.length; i++) {
    letterCount = letterCount + wordLengths[i];
  }
  return letterCount / wordsArr.length;
}
console.log(averageWordLength(wordsArr));
