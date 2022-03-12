// let O = {
//   name: 'John',
//   age: 30,
//   X() {
//     console.log(this.name);
//     return this.name;
//   },
// };

// function callbackInvoker(fn) {
//   return fn();
// }
// console.log(callbackInvoker(O.X));

let O = {
  arrowFunction: null,
  name: 'John',
  age: 30,
  X() {
    this.arrowFunction = () => {
      console.log(this);
    };
  },
};
console.log(O.X());
console.log(O.arrowFunction());

function callbackInvoker(fn) {
  return fn();
}
console.log(callbackInvoker(O.X));
