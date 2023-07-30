import LinkedList from "./linkedList";

export class DoubleLinkedList<T> {
  private head: ListNode<T>;
  public length: number = 0;

  constructor(initialValue?: T) {
    this.head = new ListNode<T>(initialValue);
  }

  public insert(val: T) {
    let node = new ListNode(val);
    if (!this.head.next) {
      this.head.next = node;
      node.prev = this.head;
    } else {
      let current = this.head.next;
      while (current.next) current = current.next;
      node.prev = current;
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
    this.length--;
    return this;
  }

  public toString() {
    let current = this.head.next;
    let string = "[START] --> ";
    if (current) {
      let first = true;
      while (current.next) {
        string += `[${first ? "START" : current?.prev?.val} <(${
          current.val
        })> ${current?.next?.val}] --> `;
        current = current.next;
        first = false;
      }
      string += `[${current?.prev?.val} <(${current.val})> END] --> [END] `;
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
  prev?: ListNode<T>;
  constructor(initialValue?: T | ListNode<T>) {
    if (initialValue instanceof ListNode) {
      this.val = initialValue.val;
      this.next = initialValue.next;
      this.prev = initialValue.prev;
      return;
    }
    this.val = initialValue;
  }
}
