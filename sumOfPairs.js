// it solves but goes in timeout for big arrais

// function sumPairs(numbers, sum) {
//   // a place to store the pairs we encounter
//   const pairs = [];
//   // iterate over the array
//   numbers.forEach((leftNumber, leftIndex) => {
//     for (
//       let rightIndex = leftIndex + 1;
//       rightIndex < numbers.length;
//       rightIndex++
//     ) {
//       //// add the two values
//       //// if they are equal to sum
//       const rightNumber = numbers[rightIndex];
//       if (leftNumber + rightNumber == sum) {
//         // store the numbers and the right index
//         pairs.push({ pair: [leftNumber, rightNumber], rightIndex });
//       }
//     }
//   });
//   if (pairs.length > 0) {
//     let earliestPair = pairs[0];
//     for (let i = 0; i < pairs.length; i++) {
//       if (earliestPair.rightIndex > pairs[i].rightIndex) {
//         earliestPair = pairs[i];
//       }
//     }
//     // return the earliest pair (lowest second index)
//     return earliestPair.pair;
//   }
//   return undefined;
// }

function sumPairs(numbers, sum) {
  // a place to keep track of the numbers we have seen
  const seenNumbers = {};
  // iterate over the numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    //// subtract current number from sum to get the number we need
    const need = sum - currentNumber;
    //// check to see if we've seen the number we need before
    if (seenNumbers[need]) {
      ////// if we have return the pair
      return [need, currentNumber];
    } else {
      ////// if not, set number as seen
      seenNumbers[currentNumber] = true;
    }
  }
  return undefined;
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
