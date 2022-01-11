function paul(x) {
  const sum = 0;

  let misery = x.reduce((acc, curr) => {
    switch (curr) {
      case 'kata':
        curr = 5;
        break;
      case 'Petes kata':
        curr = 10;
        break;
      case 'life':
        curr = 0;
        break;
      case 'eating':
        curr = 1;
        break;
    }
    return acc + curr;
  }, 0);

  if (misery < 40) {
    return 'Super happy!';
  } else if (misery < 70 && misery >= 40) {
    return 'Happy!';
  } else if (misery < 100 && misery >= 70) {
    return 'Sad!';
  } else if (misery > 100) {
    return 'Miserable!"';
  }
}

console.log(paul(['life', 'eating', 'life']));

// switch (misery) {
//   case misery < 40:
//     console.log('Super Happy');
//     break;
//   case misery < 70 && misery >= 40:
//     console.log('Happy!');
//     break;
//   case misery < 100 && misery >= 70:
//     console.log('Sad!');
//     break;
//   case misery > 100:
//     console.log('Miserable!"');
// }
