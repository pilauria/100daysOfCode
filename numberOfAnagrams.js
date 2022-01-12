// function anagramCounter(wordsArray) {
//   const mamma = wordsArray.map(string => {
//     let abcString = string
//       .split('')
//       .sort((a, b) => {
//         return a.localeCompare(b);
//       })
//       .join('');
//     return abcString;
//   });
//   let finalArr = [];
//   const sortedArr = mamma.sort();
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       finalArr.push(sortedArr[i]);
//       // console.log('finalArr', finalArr);
//     }

//     // console.log('prev', sortedArr[i], 'next', sortedArr[i + 1]);
//   }
//   return finalArr.length;
// }

console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac']));

function anagramCounter(wordsArray) {
  const sortedWords = wordsArray.map(word => word.split('').sort().join(''));
  console.log(sortedWords); // =>[ 'dell', 'dell', 'abc', 'abc', 'abc', 'abc' ]
  let counter = 0;
  for (let i = 0; i < sortedWords.length; i++) {
    for (let j = i + 1; j < sortedWords.length; j++) {
      if (sortedWords[i] === sortedWords[j]) {
        counter++;
      }
    }
  }

  return counter;
}
