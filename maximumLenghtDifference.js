// For every string x in the first array and for every string y in the second array calculate abs(length(x) − length(y)) and then take the max of these numbers.'' - this is more clear description of what you need to do.

// Create a method to return the maximum length difference 2 strings can have from the 2 string arrays. The longest string can be either from the second or first string array.

// "Find max(abs(length(x) − length(y)))" means you need to subtract the length of one string in one array from another string in the other array such that you return the largest difference possible based on your given arrays.

//  find the largest difference between the shortest length and a longest length in each array. Hint: each array will have a shortest and a longest. Return the largest difference between the two arrays.

a1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
];
a2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let stL1 = a1.map(string => string.length);
  let stL2 = a2.map(string => string.length);

  return Math.max(
    Math.max(...stL1) - Math.min(...stL2),
    Math.max(...stL2) - Math.min(...stL1)
  );
}

console.log(mxdiflg(a1, a2)); // 13
