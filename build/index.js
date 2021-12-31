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
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHandSide = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHandSide;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, 5, -2]);
sorter.sort();
console.log(sorter.collection);