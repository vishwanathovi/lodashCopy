export function chunk(array = [], size = 1) {
  if (size < 1) {
    return [];
  };
  if (size >= array.length) {
    return array;
  };
  var updatedArray = [];
  array.reduce((acc, element, index, fullArray) => {
    if ((index + 1) % size == 0) {
      updatedArray.push(array.slice(acc.start, acc.end));
      acc.start += size;
      acc.end += size;
    }
    if (index == fullArray.length - 1 && (index + 1) % size != 0) {
      updatedArray.push(array.slice(acc.start));
    }
    return acc;
  }, {
    start: 0,
    end: size
  })
  return updatedArray;
}

export function compact(array) {

  return array.filter((item) => item)
}

export function concat(array) {
  var updatedArray = array;
  for (let i = 1; i < arguments.length; i++) {
    updatedArray.push(Array.isArray(arguments[i]) ? arguments[i][0] : arguments[i]);
  }
  return updatedArray;
}

export function difference(array, ...args) {
  console.log(args)
  var updatedArray = [];
  for (item of array) {
    if (args.every((ele) => {
        return Array.isArray(ele) ? ele.every((itemInner) => ActualEle != itemInner) : ActualEle != item;
      })) {
      updatedArray.push(item);
    }
  }
  return updatedArray;
}


console.log(difference([1, 2, 3, 4, 5], [2, 3], 4, 5))