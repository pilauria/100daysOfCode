function cookingTime(eggs) {
  // TODO
  let nOfCooking = Math.ceil(eggs / 8);
  let time = nOfCooking * 5;

  return time;
}

console.log(cookingTime(12));
