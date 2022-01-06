function largestPairSum(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] + numbers[numbers.length - 2];
}

console.log(
  largestPairSum([
    60, -60, -36, 47, 36, 86, -64, 98, 16, 99, 94, 42, -21, -84, 99,
  ])
);
