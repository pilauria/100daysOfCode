function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

const greet = (f1, f2) => {
  return `${f1} ${f2}`;
};

console.log(greet(greeting(), recipient()));
