export default class LinkedList<T> {
  private head: ListNode<T>;
  public length: number = 0;

  constructor(initialValue?: T) {
    this.head = new ListNode<T>(initialValue);
  }

  public insert(val: T) {
    let node = new ListNode(val);
    if (!this.head.next) this.head.next = node;
    else {
      let current = this.head.next;
      while (current.next) current = current.next;
      current.next = node;
    }
    this.length++;
    return this;
  }

  public delete(val: T) {
    let lastNode = this.head.next;
    let current = this.head.next;
    while (current?.next) {
      if (current.val === val && lastNode) {
        lastNode.next = current.next;
        break;
      }
      lastNode = current;
      current = current.next;
    }
    return this;
  }

  public search(val: T) {
    let current = this.head.next;
    while (current?.next) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }

  public update(val: T, newVal: T) {
    let current = this.head.next;
    while (current?.next) {
      if (current.val === val) {
        current.val = newVal;
      }
      current = current.next;
    }
    return this;
  }

  public merge(newList: LinkedList<T>) {
    let current = this.head.next;
    while (current?.next) current = current.next;
    let newCurrent = newList.head.next;
    if (!current?.next) {
      this.head = newList.head;
      return this;
    }
    while (newCurrent?.next) {
      current.next = newCurrent;
      current = current?.next;
      newCurrent = newCurrent.next;
    }
    return this;
  }

  public sort() {}

  public toString() {
    let current = this.head.next;
    let string = "[START] --> ";
    if (current) {
      while (current.next) {
        string += `[${current.val}] --> `;
        current = current.next;
      }
      string += `[${current.val}] --> [END] `;
    } else {
      string = "EMPTY";
    }

    return string;
  }

  public log() {
    console.log(this.toString());
    return this;
  }
}

class ListNode<T> {
  val?: T;
  next?: ListNode<T>;
  constructor(initialValue?: T) {
    this.val = initialValue;
  }
}
