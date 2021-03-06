import { swap } from './uttils';

class InsertionSort {
  private constructor() {}

  public static sort<T>(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j > 1; j--) {
        if (arr[j] < arr[j - 1]) {
          // 交换元素位置
          swap(arr, j, j - 1);
        } else {
          break;
        }
      }
    }
  }

  public static optimizeSort<T>(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      let j;
      for (j = i; j > 1 && item < arr[j - 1]; j--) {
        // 元素向后平移
        arr[j] = arr[j - 1];
      }
      arr[j] = item;
    }
  }

  // 从后往前排
  // public static optimizeSort(arr: any[]) {
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     const item = arr[i];
  //     let j;
  //     for (j = i; j < arr.length - 1 && item > arr[j + 1]; j++) {
  //       arr[j] = arr[j + 1];
  //     }
  //     arr[j] = item;
  //   }
  // }
}

export default InsertionSort;
