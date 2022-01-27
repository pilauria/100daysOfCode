function repeatedString(s, n) {
  // Write your code here

  let occurrences = s.split('a').length - 1;
  console.log(occurrences);
  let max = Math.floor(n / s.length);
  console.log(max);
  let totalA = occurrences * max;
  totalA += s.slice(0, n % s.length).split('a').length - 1;
  return totalA;
}

// (OR):
const repeatedString = (s, n) => {
  const strLen = s.length;
  const fullStringRepetitions = Math.floor(n / strLen);
  console.log('fullStringRepetitions:', fullStringRepetitions);
  const trailingCharacterCount = n - strLen * fullStringRepetitions;
  console.log('trailingCharacterCount:', trailingCharacterCount);
  const trailingCharacters = s.slice(0, trailingCharacterCount);
  console.log('trailingCharacters:', trailingCharacters);

  const getCharCount = str => [...str].reduce((a, b) => a + (b === 'a'), 0);
  return (
    fullStringRepetitions * getCharCount(s) + getCharCount(trailingCharacters)
  );
};

console.log(repeatedString('aba', 10));
