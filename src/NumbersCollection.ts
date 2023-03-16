import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
    super();
    }

    get length(): number {
        return this.data.length;
    }  // get keyword lets us call the function as a .length later without function length() syntax

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex]>this.data[rightIndex]
    }
    //if compare return true, we will execute compare()
    swap(leftIndex:number, rightIndex: number): void {
        const leftSide = this.data[leftIndex];
        this.data[leftIndex]=this.data[rightIndex];
        this.data[rightIndex] = leftSide;
    }
}