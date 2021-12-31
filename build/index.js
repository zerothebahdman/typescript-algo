"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    // Implementing sorting with bubble sort algorithm
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // This is going to work if we have and array of numbers numbers[]
                // ~~~~ Logic to comapre and swap numbers in an array in assending order ~~~~
                // A type guard is some expression that performs a runtime check that guarantees the type in some scope.
                if (this.collection instanceof Array) {
                    // using type guard to check if the given collection is an array of numbers (numbers[]) || a string.
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHandSide = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHandSide;
                    }
                }
                // This going to work if we have a string
                // ~~~~~ Logic to compare and swap characters in a string ~~~~~
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, 5, -2]);
sorter.sort();
console.log(sorter.collection);
