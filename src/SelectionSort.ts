import { swap } from './uttils';

class SelectionSort {
  private constructor() {}

  public static sort<T>(arr: T[]) {
    for (let i = 0; i < arr.length; i += 1) {
      let minIndex = i;
      for (let j = i; j < arr.length; j += 1) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
    // 从后往前排
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   let maxIndex = i;
    //   for (let j = i; j >= 0; j--) {
    //     if (arr[j] > arr[maxIndex]) {
    //       maxIndex = j;
    //     }
    //   }
    //   this.swap(arr, i, maxIndex);
    // }
  }
}

export default SelectionSort;

// export class Comparable<T> {
//   private source: T;
//   constructor(source: T) {
//     this.source = source;
//   }
//   public compareTo(target: T) {
//     if (this.source < target) {
//       return -1;
//     } else if (this.source === target) {
//       return 0;
//     }
//     return 1;
//     // return this.source - target
//   }
// }
