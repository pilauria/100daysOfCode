function squareDigits(num) {
  return Number(
    String(num)
      .split('')
      .map(number => {
        return Number(number ** 2);
      })
      .join('')
  );
}

console.log(squareDigits(9119));
