import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollections = new NumbersCollection([82, 4, 5, 0, -6, 10, 17, 80]);
const sortNumbers = new Sorter(numberCollections);
sortNumbers.sort();
console.log(numberCollections.data);

const charactersCollection = new CharactersCollection("Xasfbfafwaewr");
const sortStrings = new Sorter(charactersCollection);
sortStrings.sort();
console.log(charactersCollection.data);
