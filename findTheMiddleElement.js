function gimme(triplet) {
  let [a, b, c] = triplet;
  if ((b < a && b > c) || (b > a && b < c)) return triplet.indexOf(b);
  if ((a < b && a > c) || (a > b && a < c)) return triplet.indexOf(a);
  if ((c < b && c > a) || (c > b && c < a)) return triplet.indexOf(c);
}

console.log(gimme([5.9, 10.4, 14.2])); //  => 0

// function gimme(a) {
//   return a.indexOf(
//     a.slice().sort(function (a, b) {
//       return a - b;
//     })[1]
//   );
// }
// slice() duplicates the input array. It must be done because sort modifies it.
