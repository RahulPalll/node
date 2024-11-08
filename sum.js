// console.log("sum module executed");

// var x = "hello world  ";

// function calculateSum(a, b) {
//   sum = a + b;
//   console.log(sum);
// }

// module.exports = { x: x, calculateSum: calculateSum };

console.log("sum module executed");

export var x = "hello world  ";

export function calculateSum(a, b) {
  var sum = a + b;
  console.log(sum);
}

// module.exports = { x: x, calculateSum: calculateSum };
