const numbers = 100;

for (let i = 1; i <= numbers; i++) {
  if ((i % 3 === 0) & (i % 5 === 0)) console.log('Hawaii');
  else if (i % 3 === 0) console.log('Pizza');
  else if (i % 5 === 0) console.log('Pineapple');
  else console.log(i);
}
