import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


//initiate some examples to test sorting capabilities

//numbers array
const numbersCollection = new NumbersCollection([-10, 3, 4,1]);
numbersCollection.sort();
console.log(numbersCollection.data);


//string
const charactersCollection = new CharactersCollection('GysmZsA');
charactersCollection.sort();
console.log(charactersCollection.data);


//Linked List
const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(2);
linkedList.add(-1);
linkedList.add(12);


linkedList.sort();
linkedList.print();