// 1. Please write a function that shows the usage of closures

const countLimit = (limit) => {
  let count = limit;

  return () => {
    count--;

    return count >= 0
      ? `${count} left`
      : `You reached limit of ${limit}!`;
  };
};

const newLimit = countLimit(3);

newLimit();
newLimit();
newLimit();
newLimit();
newLimit();

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumOfArrItems = (arr) => arr.reduce((a, b) => a + b);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const getFlatArray = (arr) => {
  const flatedArr = [];

  arr.forEach(el => {
    if (Array.isArray(el)) {
      const flatedEl = getFlatArray(el);
      flatedEl.forEach(e => flatedArr.push(e));
    } else {
      flatedArr.push(el);
    }
  });

  return flatedArr;
};

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const getCommonElements = (arr1, arr2) => {
  const commonItems = [];

  arr1.forEach(el => {
    if (arr2.includes(el)) {
      commonItems.push(el);
    }
  });

  return commonItems;
};

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const getDiffElements = (arr1, arr2) => {
  const diffItems1 = arr1.filter(el => !arr2.includes(el));
  const diffItems2 = arr2.filter(el => !arr1.includes(el));

  return [...diffItems1, ...diffItems2];
};

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const makeTuples = (arr1, arr2) => arr1.map((el, i) => [el, arr2[i]]);

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const findPath = (arr, obj) => {
  let i = 0;
  let val = obj[arr[i]];

  while (typeof val === 'object') {
    i++;
    val = val[arr[i]];
  }
  
  return val;
};

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObj = (obj1, obj2) => {
  const entriesFlat1 = Object.entries(obj1).flat();
  const entriesFlat2 = Object.entries(obj2).flat();

  if (entriesFlat1.length !== entriesFlat2.length) {
    return false;
  }

  for(let i = 0; i < entriesFlat1; i++) {
    if (entriesFlat1[i] !== entriesFlat2[i]) {
      return false;
    }
  }

  return true;
};

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const getNoListKeys = (arr, obj) => {
  const copy = {};
  const keys = Object.keys(obj);
  const diffItemsArr = keys.filter(el => !arr.includes(el));

  diffItemsArr.forEach(el => {
    copy[el] = obj[el];
  })

  return copy;
};
