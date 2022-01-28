function uniquifyArray(array) {
  let unique = [];

  if (array.length === 0) {
    return null;
  }

  array.map(item => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
}

const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'poison',
  'poison',
  'communion',
  'simple',
  'bring',
];

console.log(uniquifyArray(wordsUnique));
