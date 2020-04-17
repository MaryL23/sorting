function split(array) {
  let firstArray;

  let secondArray;

  if (array.length % 2 === 0) {
    firstArray = array.slice(0, array.length / 2);
    secondArray = array.slice(array.length / 2);
  } else {
    firstArray = array.slice(0, Math.floor(array.length / 2));
    secondArray = array.slice(Math.floor(array.length / 2));
  }

  return [firstArray, secondArray];
}

function merge(sortedArr1, sortedArr2) {
  let finalArr = [];

  while (sortedArr1[0] && sortedArr2[0]) {
    if (sortedArr1[0] < sortedArr2[0]) {
      finalArr.push(sortedArr1.shift());
    } else {
      finalArr.push(sortedArr2.shift());
    }
  }

  if (sortedArr1[0]) {
    sortedArr1.forEach((item) => finalArr.push(item));
  } else {
    sortedArr2.forEach((item) => finalArr.push(item));
  }
  return finalArr;
}
