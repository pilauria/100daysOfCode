// write the function isAnagram
var isAnagram = function (test, original) {
  const sortedString = [...test]
    .sort((a, b) => a.localeCompare(b))
    .join('')
    .toLocaleLowerCase();
  const sortedString2 = [...original]
    .sort((a, b) => a.localeCompare(b))
    .join('')
    .toLocaleLowerCase();
  console.log(sortedString2, sortedString);
  return !sortedString.localeCompare(sortedString2);
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));

// // (OR):
// function isAnagram(test, original) {
//   return (
//     test.toLowerCase().split('').sort().join('') ===
//     original.toLowerCase().split('').sort().join('')
//   );
// }
