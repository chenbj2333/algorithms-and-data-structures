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
      this.swap(arr, i, minIndex);
    }
  }

  private static swap<T>(arr: T[], a: number, b: number) {
    const temp: T = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
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
