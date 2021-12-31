import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollections = new NumbersCollection([82, 4, 5, 0, -6, 10, 17, 80]);
const sorter = new Sorter(numberCollections);

sorter.sort();
console.log(numberCollections.data);
