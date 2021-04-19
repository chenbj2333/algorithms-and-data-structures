/*
 * @Description: 第一节 线性查找
 * @Author: ChenBingJie
 * @Date: 2021-04-14 19:47:59
 * @Last Modified by: ChenBingJie
 * @Last Modified time: 2021-04-14 19:57:33
 */
class LinearSearch {
  private constructor() {}

  public static search<T>(data: T[], target: T) {
    for (let i = 0; i < data.length; i += 1) {
      if (Object.is(data[i], target)) {
        return i;
      }
    }
    return -1;
  }
}

export default LinearSearch;
