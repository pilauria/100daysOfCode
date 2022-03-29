function GetMedian(movingArr) {
  movingArr.sort((a, b) => a - b);
  if (movingArr.length % 2 == 0) {
    let i1 = (movingArr.length - 1) / 2;
    let i2 = i1 + 1;
    return (movingArr[i1] + movingArr[i2]) / 2;
  } else {
    let i = (movingArr.length - 1) / 2;
    return movingArr[i];
  }
}

function GetNextSlidingWindow(arr, listOfMedian, listOfNumber, index, n) {
  let movingArr = [];
  let i = 0;
  while (i < n) {
    if (listOfNumber[index + i] != null) {
      movingArr.push(listOfNumber[index + i]);
      i++;
    } else {
      return listOfMedian;
    }
  }
  let median = GetMedian(movingArr);
  listOfMedian.push(median);
  index++;
  return GetNextSlidingWindow(arr, listOfMedian, listOfNumber, index, n);
}

function ArrayChallenge(arr) {
  let n = arr[0];
  let listOfNumber = arr.slice(1, arr.length);
  let listOfMedian = [];
  i = 1;
  while (i < n) {
    listOfMedian.push(i);
    i++;
  }
  let index = 0;
  let result = GetNextSlidingWindow(arr, listOfMedian, listOfNumber, index, n);
  console.log(result);
}

function main() {
  let arr = [3, 1, 3, 5, 10, 6, 4, 3, 1];
  ArrayChallenge(arr);
}

console.log(main());
