"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numberCollections = new NumbersCollection_1.NumbersCollection([82, 4, 5, 0, -6, 10, 17, 80]);
const sorter = new Sorter_1.Sorter(numberCollections);
sorter.sort();
console.log(numberCollections.data);
