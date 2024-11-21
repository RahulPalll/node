function reverseArray(array) {
  if (array.length == 1) {
    return array;
  } else {
    let reverseArray = [];

    for (let i = 0; i < array.length; i++) {
      reverseArray[i] = array[array.length - 1 - i];
    }
    return reverseArray;
  }
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArray([1]));
