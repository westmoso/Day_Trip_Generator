"use strict"

//4 randomly selected destination/restaurant/transport/entertainment 
const randomDest = ["Berlin", "New York City", "Austin", "Seoul", "Los Angeles", "Johannesburg", "Reykjavik", "London"]
let random = Math.floor(Math.random() * randomDest.length);
let suggestedDest = (random, randomDest[random]); 

// const randomRest = ["in-house breakfast room service", "Ruth Chris Steakhouse", "Acropolis", "Hyman's Seafood", "Umami Ramen", "The Squealing Pig", "Dorsia"]
// random = Math.floor(Math.random() * randomRest.length);
// console.log(random, randomRest[random]); this only generates a random, it doesn't generate an individual suggestion

const randomMode= ["Uber", "Pedicab", "horse-drawn carriage", "Oj's Bronco", "Batmobile", "Millenium Falcon", "Doc Brown's Delorean"]
random = Math.floor(Math.random() * randomMode.length);
console.log(random, randomMode[random]); 

const randomTain= ["Medieval Times","Wine and Paint Night","drive-in theater showing of Tenet",]
random = Math.floor(Math.random() * randomTain.length);
console.log(random, randomTain[random]); 

// let firstsuggestion = entertainmenttonight
// function  (randomDest, randorRest, randomMode, randomTain)
// var result;
// result = 

// if(entertainmenttonight === random)

// let suggestion1= [randomDest, randomMode, randomRest, randomTain]
// suggestion1.shift();
// console.log(suggestion1);
//this showed the individual arrays by type but not a random result from the arrays

let suggestion1= [randomDest, randomMode, randomRest, randomTain]
suggestion1.shift();
console.log(suggestion1);

