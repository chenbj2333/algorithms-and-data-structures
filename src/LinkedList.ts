class Node<T> {
  e: T | null = null;
  next: Node<T> | null | undefined = null;

  constructor(e: T | null = null, next: Node<T> | null = null) {
    this.e = e;
    this.next = next;
  }
}

class LinkedList<T> {
  private size: number;
  private dummyHead: Node<T>;

  constructor() {
    this.size = 0;
    this.dummyHead = new Node();
  }

  // 获取链表中的元素个数
  public getSize() {
    return this.size;
  }

  // 链表是否为空
  public isEmpty() {
    return this.size === 0;
  }

  // 在中间添加元素
  public addNode(index: number, e: T) {
    if (index < 0 || index > this.size) {
      throw new Error('add failed, illegal index.');
    }

    let prev = this.dummyHead!;
    for (let i = 0; i < index; i++) {
      prev = prev.next as Node<T>;
    }
    // const node = new Node<T>(e);
    // node.next = prev.next;
    // prev.next = node;
    prev.next = new Node<T>(e, prev.next);
    this.size++;
  }

  // 添加头部元素
  public addFirst(e: T) {
    this.addNode(0, e);
  }

  // 在尾部添加元素
  public addLast(e: T) {
    this.addNode(this.size, e);
  }

  // 获得index位置的元素
  public get(index: number) {
    if (index < 0 || index >= this.size) {
      throw new Error('add failed, illegal index.');
    }

    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur?.next;
    }
    return cur?.e;
  }

  // 获得链表的第一个元素
  public getFirst() {
    this.get(0);
  }

  // 获得链表的最后一个元素
  public getLast() {
    this.get(this.size - 1);
  }

  // 修改链表中第index位置的值
  public set(index: number, e: T) {
    if (index < 0 || index >= this.size) {
      throw new Error('add failed, illegal index.');
    }

    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur?.next;
    }
    if (cur) {
      cur.e = e;
    }
  }

  // 查找链表中是否有元素e
  public contains(e: T) {
    let cur = this.dummyHead.next;
    for (let i = 0; i < this.size; i++) {
      if (cur?.e !== e) {
        cur = cur?.next;
      } else {
        return true;
      }
    }
    return false;
  }

  public toString() {
    let str = 'null -> ';
    for (let cur = this.dummyHead.next; cur !== null; cur = cur?.next) {
      str += `${cur?.e} -> `;
    }
    str += 'null';
    return str;
  }
}

export default LinkedList;
