function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let percentage = 10; // %

  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    console.log(percentage, days);
    days++;
  }
  return days;
}

console.log(evaporator(10, 10, 5));
