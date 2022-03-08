let destinations = [
  'Prague',
  'London',
  'Sydney',
  'Belfast',
  'Rome',
  'Aruba',
  'Paris',
  'Bora Bora',
  'Barcelona',
  'Rio de Janeiro',
  'Marrakesh',
  'New York City',
];

// for (let city of destinations) console.log(city);

let contains = (cityToCheck, list) => {
  for (let city of list) {
    if (city === cityToCheck) return true;
  }
  return false;
};

console.log(contains('Barcelona', destinations));
