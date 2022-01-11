var number = function (busStops) {
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
};

// //(OR)
// var number = function (busStops) {
//   let sumPeople = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     let currStop = busStops[i];
//     let getOn = currStop[0];
//     let getOff = currStop[1];

//     sumPeople += getOn;
//     console.log(sumPeople);
//     sumPeople -= getOff;
//     console.log(sumPeople);
//   }
//   return sumPeople;
// };

//(OR) with forEach
var number = function (busStops) {
  var totalPeople = 0;
  busStops.forEach((stop, i) => {
    totalPeople += stop[0];
    totalPeople -= stop[1];
  });
  return totalPeople;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // => 5
