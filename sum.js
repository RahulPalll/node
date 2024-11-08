console.log("sum module executed");

var x = "hello world  ";

function calculateSum(a, b) {
  sum = a + b;
  console.log(sum);
}

module.exports = { x: x, calculateSum: calculateSum };
