"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    } // get keyword lets us call the function as a .length later without function length() syntax
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    //if compare return true, we will execute compare()
    swap(leftIndex, rightIndex) {
        const leftSide = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftSide;
    }
}
exports.NumbersCollection = NumbersCollection;
