function productOtherIndex(arr) {
  let product = 1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      product *= arr[i];
    }
  }
  console.log(product);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (count > 1) {
      result.push(0);
    } else if (count === 1) {
      result.push(arr[i] === 0 ? product : 0);
    } else {
      result.push(product / arr[i]);
    }
  }
  return result;
}

console.log(productOtherIndex([1, 2, 9, 0, 5]));
