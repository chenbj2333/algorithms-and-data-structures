// import ArrayGenerator from './ArrayGenerator';
// import InsertionSort from './InsertionSort';
// import SelectionSort from './SelectionSort';
// import SortingHelper from './SortingHelper';

import Stack from './Stack';

// const data = ArrayGenerator.generateRandomArray(10000, 1, 10000);
// SortingHelper.sortTest(SelectionSort.sort, data);
// SortingHelper.sortTest(InsertionSort.sort, data);
// SortingHelper.sortTest(InsertionSort.optimizeSort, data);

// stack test
const s = new Stack<number>([999]);
for (let i = 0; i < 5; i++) {
  s.push(i);
}
s.pop();
s.peek();
console.log(s);
