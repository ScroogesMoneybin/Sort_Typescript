import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }  // get keyword lets us call the function as a .length later without function length() syntax

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase()>this.data[rightIndex].toLowerCase();
    }
    //if compare return true, we will execute compare()
    swap(leftIndex:number, rightIndex: number): void {
        const char=this.data.split('');
        const leftSide = char[leftIndex];
        char[leftIndex]=char[rightIndex];
        char[rightIndex] = leftSide;

        this.data= char.join('');
    }
}