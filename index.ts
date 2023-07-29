import LinkedList from "./data-structure/linkedList";
const list = new LinkedList<number>();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

const list2 = new LinkedList<number>();

list2.insert(10);
list2.insert(20);
list2.insert(30);
list2.insert(40);

list.merge(list2);
list.log();

// console.log(list.search(3));
