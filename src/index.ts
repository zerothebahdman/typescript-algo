import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";

const numberCollections = new NumbersCollection([82, 4, 5, 0, -6, 10, 17, 80]);
const sortNumbers = new Sorter(numberCollections);
sortNumbers.sort();
console.log(numberCollections.data);

const charactersCollection = new CharactersCollection("Xasfbfafwaewr");
const sortStrings = new Sorter(charactersCollection);
sortStrings.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(-20);
linkedList.add(5);

const sortLinkedList = new Sorter(linkedList);
sortLinkedList.sort();
linkedList.print();
