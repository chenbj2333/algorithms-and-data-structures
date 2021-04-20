import ArrayGenerator from './ArrayGenerator';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import SortingHelper from './SortingHelper';

const data = ArrayGenerator.generateRandomArray(100000, 1, 100000);
SortingHelper.sortTest(SelectionSort.sort, data);
SortingHelper.sortTest(InsertionSort.sort, data);
SortingHelper.sortTest(InsertionSort.optimizeSort, data);
