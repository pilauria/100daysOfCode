function sockMerchant(n, ar) {
  // Write your code here
  let socks = {};
  let pairs = 0;

  for (let item of ar) {
    console.log('item:', item);
    console.log('socks[item]:', socks[item]);
    console.log('socks:', socks);
    socks[item] = socks[item] + 1 || 1;
    console.log('socks after iteration:', socks);

    if (socks[item] % 2 === 0) {
      pairs++;
    }
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// function sockMercant(params) {}
