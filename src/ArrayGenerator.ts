class ArrayGenerator {
  private constructor() {}

  public static generateOrderedArray(n: number) {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }

  public static generateRandomArray(n: number, min: number = 0, max: number) {
    const arr: number[] = [];
    const rnd = Math.random();

    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * (max - min)) + min);
    }

    return arr;
  }
}

export default ArrayGenerator;
