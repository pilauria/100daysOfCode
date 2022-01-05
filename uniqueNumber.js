/* There is an array with some numbers. All numbers are equal except for one. Try to find it! */
/* findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 */

function findUniq(arr) {
  const x = arr.filter(e => e === arr[0]);
  const y = arr.filter(e => e !== arr[0]);
  return x.length > y.length ? y[0] : x[0];
}

// (OR)
// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }

//(OR)
// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

console.log(findUniq([1, 1, 1, 2, 1, 1]));
