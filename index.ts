import { DoubleLinkedList } from "./data-structure/Lists/doubleyLinkedList";
import LinkedList from "./data-structure/Lists/linkedList";
const list = new DoubleLinkedList<number>();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

const list2 = new LinkedList<number>();

list2.insert(10);
list2.insert(20);
list2.insert(30);
list2.insert(40);

list.log();

// console.log(list.search(3));
