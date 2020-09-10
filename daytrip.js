"use strict"

//4 randomly selected destination/restaurant/transport/entertainment 
const randomDest = ["Berlin", "New York City", "Austin", "Seoul", "Los Angeles", "Johannesburg", "Reykjavik", "London"]
let random = Math.floor(Math.random() * randomDest.length);
console.log(random, randomDest[random]); //don't want a console log result in final just for testing code in randomizing

const randomRest = ["in-house breakfast room service", "Ruth Chris Steakhouse", "Acropolis", "Hyman's Seafood", "Umami Ramen", "Squealing Pig", "Dorsia"]
random = Math.floor(Math.random() * randomRest.length);
console.log(random, randomRest[random]); //don't want a console log result in final just for testing code in randomizing
