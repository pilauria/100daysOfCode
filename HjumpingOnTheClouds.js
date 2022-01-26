function jumpingOnClouds(c) {
  let jumps = 0;
  let ind = 0;
  do {
    jumps++;
    ind = c[ind + 2] === 0 ? ind + 2 : ind + 1;
  } while (ind < c.length - 1);
  return jumps;
}

// function jumpingOnClouds(c) {
//   let numOfJumps = 0;

//   for (let i = 0; i < c.length; i++) {
//     if (c[i] === 0 && c[i + 2] === 0) {
//       numOfJumps = numOfJumps + 1;
//       i = i + 1;
//       continue;
//     }
//     if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 1) {
//       numOfJumps = numOfJumps + 1;
//       continue;
//     }
//     if (c[i] === 0 && c[i + 1] === 0 && !c[i + 2]) {
//       numOfJumps = numOfJumps + 1;
//       continue;
//     }
//   }

//   return numOfJumps;
// }

// function jumpingOnClouds(c) {
//   let minJumps = 0;
//   let currPos = 0;
//   for (let i = 0; i < c.length; i++) {
//     const oneJump = c[currPos + 1];
//     const twoJump = c[currPos + 2];

//     if (twoJump === 0) {
//       currPos += 2;
//       minJumps++;
//     } else if (oneJump === 0) {
//       currPos += 1;
//       minJumps++;
//     }
//   }
//   return minJumps;
// }

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
