"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
//initiate some examples to test sorting capabilities
//numbers array
const numbersCollection = new NumbersCollection_1.NumbersCollection([-10, 3, 4, 1]);
numbersCollection.sort();
console.log(numbersCollection.data);
//string
const charactersCollection = new CharactersCollection_1.CharactersCollection('GysmZsA');
charactersCollection.sort();
console.log(charactersCollection.data);
//Linked List
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(300);
linkedList.add(2);
linkedList.add(-1);
linkedList.add(12);
linkedList.sort();
linkedList.print();
