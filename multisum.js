const multisum = maxNum => {
  let sum = 0;
  for (let number = 1; number <= maxNum; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }
  return sum;
};

// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(maxValue) {
//   let sum = 0;

//   for (let number = 1; number <= maxValue; number += 1) {
//     if (isMultiple(number, 3) || isMultiple(number, 5)) {
//       sum += number;
//     }
//   }

//   return sum;
// }

console.log(multisum(5));
