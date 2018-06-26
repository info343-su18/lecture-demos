'use strict';

function sayHello(name) { 
    console.log("Hello, "+name);
}

function sayBye(name){
    console.log("See you later, ", name)
}

//takes ANOTHER FUNCTION as an arg
//will call the arg function, 
//passing it "world"
function doWorld(aFunction) {
    aFunction("world");
}

doWorld(sayHello);
doWorld(sayBye);

//console.log( sayHello, "world" );

console.log("\n");

//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the same time!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    return 'rub your belly';
}

//pass in the callbacks to do them together
doTogether(rubBelly, patHead);

let array = ['a','b','c'];
let printItem = function(item) {
   console.log(item);
}

array.forEach(function(item) {
    console.log(item);
});

for(let item of array){
    console.log(item);    
}

let addCape = function(person){
    return person+" in a cape";
}

let civilians = ['clark', 'bruce', 'tony'];

let heroes = civilians.map(function(person){
    return person+" in a cape";
});
console.log(heroes);



/*** JAVASCRIPT LECTURE ***/
/* code goes here */
// console.log("Hello world!");

// console.log("I'm doing JavaScript!");

// console.log('I said: "Weeeeeeee"');

// let x = 'hello'; //value is a String
// console.log(x);

// x = 42; //value is now a Number
// console.log(x);

// let hoursSlept; 
// console.log(hoursSlept); //=> undefined

// let ages = {'sarah':42, 'amit':35, 'zhang':13}

// let array = [1,2,3,4];

// for(let i=0; i<array.length; i++){
//     console.log(i);
// }

// let agesKeys = Object.keys(ages);


// function sayHello() {
//     let secretName = "Clark Kent";
//     console.log("Hello");
// }

// sayHello();
