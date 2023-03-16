"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    } // get keyword lets us call the function as a .length later without function length() syntax
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    //if compare return true, we will execute compare()
    swap(leftIndex, rightIndex) {
        const char = this.data.split('');
        const leftSide = char[leftIndex];
        char[leftIndex] = char[rightIndex];
        char[rightIndex] = leftSide;
        this.data = char.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
