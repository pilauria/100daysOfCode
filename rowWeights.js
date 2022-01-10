// function rowWeights(array) {
//   //your code here
//   if (array.length === 0) {
//     return 0;
//   } else if (array[1] === undefined) {
//     return [array[0], 0];
//     // console.log(arr1);
//     return arr1;
//   } else {
//     let even = array
//       .filter((_, idx) => idx % 2 === 0)
//       .reduce((acc, num) => acc + num);
//     let odd = array
//       .filter((_, idx) => idx % 2 === 1)
//       .reduce((acc, num) => acc + num);

//     return [even, odd];
//   }
// }
// (OR):

function rowWeights(array) {
  var team1 = 0;
  var team2 = 0;
  array.forEach((element, index) => {
    if (index % 2 == 0) {
      team1 += element;
    } else {
      team2 += element;
    }
  });
  return [team1, team2];
}

console.log(rowWeights([80])); //  ==>  return (62, 27)
