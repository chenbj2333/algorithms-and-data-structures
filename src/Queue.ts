interface IQueue<T> {
  enqueue: (item: T) => void;
  dequeue: () => T | undefined | null;
  getFront: () => T | undefined | null;
  getSize: () => number;
  isEmpty: () => boolean;
}

class Queue<T> implements IQueue<T> {
  private queue: (T | null)[];

  constructor() {
    this.queue = [];
  }
  public enqueue(item: T) {
    this.queue.push(item);
  }

  public dequeue() {
    return this.queue.shift();
  }

  public getFront() {
    return this.queue[0];
  }

  public getSize() {
    return this.queue.length;
  }

  public isEmpty() {
    return this.queue.length === 0;
  }
}

export default Queue;
