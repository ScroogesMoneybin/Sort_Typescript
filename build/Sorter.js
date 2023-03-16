"use strict";
// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number):boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//Sorter will be just the parent class that other classes inherit from, so we set it up as an Abstract Class, which we don't call directly, since these classes are closely related.
//Interface would be more appropriate for loosely related classes to interconnect
class Sorter {
    sort() {
        const length = this.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
