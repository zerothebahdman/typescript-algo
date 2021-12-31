"use strict";
/** use this to sort array of numbers (numbers[]) */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("../class/Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] < this.data[rightIndex];
    }
    /* the get key word will return the length not as a method (.length()) but as (.length)*/
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const leftHandSide = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHandSide;
    }
}
exports.NumbersCollection = NumbersCollection;
