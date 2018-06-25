'use strict';

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

let ages = {'sarah':42, 'amit':35, 'zhang':13}

let array = [1,2,3,4];

for(let i=0; i<array.length; i++){
    console.log(i);
}

let agesKeys = Object.keys(ages);


function sayHello() {
    let secretName = "Clark Kent";
    console.log("Hello");
}

sayHello();
