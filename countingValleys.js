// function countingValleys(n, s) {
//   // setting the constraints
//   const min = 2;
//   const max = 1000000;
//   let valleys = 0;
//   let isInValley = false;

//   // if it's a string convert it to an array:
//   s = typeof s === 'string' ? s.split('') : s;

//   // check if s meets the requirements
//   if (
//     s.length >= min &&
//     s.length <= max &&
//     n === parseInt(n, 0) &&
//     n >= min &&
//     n <= max &&
//     n === s.length
//   ) {
//     // converting the array steps to integers:
//     s = s.map(steps => (steps === 'U' ? 1 : -1));
//     // traverse the full path:
//     let path = 0;
//     for (let i of s) {
//       path += i;
//       if (path < 0 && !isInValley) {
//         // to check that we're not already in a valley
//         // start of a valley
//         isInValley = true;
//       }
//       if (path == 0 && isInValley) {
//         //to check if we're just coming out of a valley
//         // end of valley, increase count
//         valleys++; // increase count
//         isInValley = false; // reset isInValley
//       }
//     }
//   }
//   // to make sure we return even when the req. are not met:
//   return valleys;
// }

// refactoring:
function countingValleys(n, s) {
  const min = 2;
  const max = 1000000;
  let valleys = 0;
  let isInValley = false;
  s = typeof s === 'string' ? s.split('') : s;

  if (
    s.length >= min &&
    s.length <= max &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= max &&
    n === s.length
  ) {
    // remove s = s.map because we're already iterating
    s.map(steps => (steps === 'U' ? 1 : -1)).reduce((prev, next) => {
      if (prev < 0 && !isInValley) {
        isInValley = true;
      }
      if (prev + next === 0 && isInValley) {
        valleys++;
        isInValley = false;
      }
      // continue incrementing by adding
      return prev + next;
    });
  }
  return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));
