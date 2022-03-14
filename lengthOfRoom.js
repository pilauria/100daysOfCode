let input = require('readline-sync');

const SQMETERS_TO_FEET = 10.7639;
const SQFEET_TO_METERS = 0.092903;

// console.log('Enter the length of the room in meters:');
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log('Enter the width of the room in meters:');
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaMt = length * width;

// let areaFT = areaMt * SQMETERS_TO_FEET;

// console.log(
//   `The area of the room is ${areaMt} square meters (${areaFT})square feet.`
// );

//////////////////////////////////////////////
const areaFT = targetArea => targetArea * SQMETERS_TO_FEET;
const areaMT = targetArea => targetArea * SQFEET_TO_METERS;

console.log('Enter the input type: "mt" for meters or "ft" feet');
let operation = input.prompt();

console.log('Enter the length of the room:');
let length = input.prompt();
length = parseInt(length, 10);

console.log('Enter the width of the room:');
let width = input.prompt();
width = parseInt(width, 10);

let area = length * width;

if (operation === 'mt') {
  let areaM = areaFT(area);
  console.log(`The area in mt is ${areaM.toFixed(2)}`);
} else if (operation === 'ft') {
  let areaF = areaMT(area);
  console.log(`The area in ft is ${areaF.toFixed(2)}`);
} else {
  console.log('Oops. Unknown operation.');
}
