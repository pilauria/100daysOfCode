var speed = 0;

function accelerate(speed) {
  return (speed += 1);
}

accelerate(speed);
accelerate(speed);
accelerate(speed);
console.log(accelerate(speed));

var speed = 0;

// const accelerate = speed => {
//   return (speed += 1);
// };

// accelerate(speed);
// accelerate(speed);
// accelerate(speed);
// console.log(accelerate(speed));
