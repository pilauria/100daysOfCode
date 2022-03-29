let token = 'zyrs8ilu1c52';

function LargestFour(arr) {
  if (arr.length <= 4)
    return arr.reduce((a, b) => {
      return a + b;
    }, 0);
  var sorted = arr.sort((a, b) => {
    return a - b;
  });
  return LargestFour(sorted.slice(-4));
}

console.log(LargestFour([4, 5, -2, 3, 1, 2, 6, 6]));
