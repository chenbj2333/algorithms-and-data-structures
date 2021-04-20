class SortingHelper {
  private constructor() {}

  public static isSorted<T>(arr: T[]) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }

  public static sortTest<T>(sortfunc: (arr: T[]) => void, arr: T[]) {
    const startTime = new Date().getTime();
    sortfunc(arr);
    const endTime = new Date().getTime();
    const time = endTime - startTime;

    if (!SortingHelper.isSorted(arr)) {
      throw new Error('排序错误');
    }
    console.log(`n: ${arr.length}, time: ${time} ms`);
  }
}

export default SortingHelper;
