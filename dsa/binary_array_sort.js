function binaryArraySort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) count++;
  }
  for (let i = 0; i < count; i++) {
    arr[i] = 0;
  }

  for (let i = count; i < arr.length; i++) {
    arr[i] = 1;
  }
  return arr;
}

console.log(binaryArraySort([1,1,1,0,0,0,0,1,1,1,1]))
