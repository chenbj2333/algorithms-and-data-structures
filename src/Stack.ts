interface IStack<T> {
  push: (value: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  getSize: () => number;
  isEmpty: () => boolean;
}

class Stack<T> implements IStack<T> {
  private array: T[];

  constructor(arr: T[] = []) {
    this.array = arr;
  }

  public push(item: T): void {
    this.array.push(item);
  }

  // 删除栈底元素并返回该元素
  public pop() {
    return this.array.pop();
  }

  // 删除栈顶元素并返回该元素
  public peek() {
    return this.array.shift();
  }

  public getSize() {
    return this.array.length;
  }

  public isEmpty() {
    return this.array.length === 0;
  }
}

export default Stack;
