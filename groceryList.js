let groceryList = [
  'paprika',
  'tofu',
  'garlic',
  'quinoa',
  'carrots',
  'broccoli',
  'hummus',
];

// while (groceryList.length > 0) {
//   let checkedItem = groceryList.pop();

//   console.log(checkedItem);
//   console.log(groceryList);
// }

function checkOff(arr) {
  while (arr.length > 0) {
    console.log(groceryList[0]);
    arr.shift();
  }
  return arr;
}

console.log(checkOff(groceryList));
