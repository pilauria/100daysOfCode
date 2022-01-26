function repeatedString(s, n) {
  // Write your code here

  let string = s.repeat(n);

  return string.split('a').length - 1;
}

console.log(repeatedString('aba', 10));
