// import ArrayGenerator from './ArrayGenerator';
// import InsertionSort from './InsertionSort';
// import SelectionSort from './SelectionSort';
// import SortingHelper from './SortingHelper';

import Queue from './Queue';
import Stack from './Stack';

// const data = ArrayGenerator.generateRandomArray(10000, 1, 10000);
// SortingHelper.sortTest(SelectionSort.sort, data);
// SortingHelper.sortTest(InsertionSort.sort, data);
// SortingHelper.sortTest(InsertionSort.optimizeSort, data);

// stack test
// const s = new Stack<number>();
// for (let i = 0; i < 5; i++) {
//   s.push(i);
// }
// s.pop();
// s.peek();
// console.log(s);

// queue test
const q = new Queue<number>();
for (let i = 0; i < 5; i++) {
  q.enqueue(i);
  console.log(q);

  if (i % 3 === 2) {
    q.dequeue();
    console.log(q);
  }
}
