// require("./xyz.js");
// require("./sum.js");
// const obj = require("./sum.js");
// const data = require("./data");

// var name = "namaste Nodejs";

// var a = 10;
// var b = 20;
// obj.calculateSum(a, b);
// console.log(obj.x);

// require("./data");

// console.log(data);

// import { calculateSum, x } from "./sum.js";

// var name = "namaste Nodejs";

// var a = 10;
// var b = 20;
// calculateSum(a, b);
// console.log(x);

let promise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (resolve) {
      resolve("Promise Resolved");
    } else {
      reject("Promise rejected");
    }
  }, 10);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
