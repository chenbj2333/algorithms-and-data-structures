import ArrayGenerator from './ArrayGenerator';
import SelectionSort from './SelectionSort';
import SortingHelper from './SortingHelper';

const data = ArrayGenerator.generateRandomArray(1000, 1, 1000);
SortingHelper.sortTest(SelectionSort, data);
