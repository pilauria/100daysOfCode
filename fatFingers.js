// var fatFingers = function (str) {
//   if (!str) return str;

//   let isCapsLocked = false;
//   let result = str.split('').reduce((acc, char) => {
//     if (char.toUpperCase() === 'A') {
//       isCapsLocked = !isCapsLocked;
//       return acc;
//     }
//     if (isCapsLocked) {
//       char =
//         char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     }
//     acc += char;
//     return acc;
//   }, '');
//   return result;
// };

function fatFingers(q) {
  let a = '',
    c = false;
  if (!q || q == '') {
    return q;
  }
  for (let i = 0; i < q.length; i++) {
    let t = q[i];
    if (t == 'a' || t == 'A') {
      c = !c;
      continue;
    }
    a += c ? (t == t.toLowerCase() ? t.toUpperCase() : t.toLowerCase()) : t;
  }
  return a;
}
