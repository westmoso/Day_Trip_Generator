"use strict"

function addFourOptions(array0, array1, array2, array3){
    let result = array0 + array1 + array2 + array3;
    return result;
}

function newFourOptions(array0, array1, array2){
    let newResult = array0 + array1 + array2;
    return newResult;
}

let array0 = ["Berlin", "New York City", "Austin", "Seoul", "Los Angeles", "Johannesburg", "Reykjavik", "London"][Math.floor(Math.random() * 8)];
let array1 = ["Heartbreak's room service breakfast", "Ruth Chris Steakhouse", "Athena's Acropolis", "Hyman's Seafood", "Umami Ramen", "The Squealing Pig", "Dorsia", "Brunch Strokes"][Math.floor(Math.random() * 8)];
let array2 = ["an Uber", "a pedicab", "a horse-drawn carriage", "Oj's Bronco", "the Batmobile", "the Millenium Falcon", "Doc Brown's Delorean"][Math.floor(Math.random() * 7)];
let array3 = ["Medieval Times.","a Jigsaw trap with all your worst fears.","see Tenet at a drive-in.", "a Haunted House.", "Cosmic Bowling.", "babysit a Planet of Baby Yodas!", "Westworld!"][Math.floor(Math.random() * 7)];
let confirmPrompt = "Upon your arrival to the Heartbreak Hotel in " + array0 + ", the Concierge will confirm your 8:00PM reservation at " 
+ array1 + ". After dinner, " + array2 + " will take you to " + array3 + " Type yes to confirm, no to get a new trip, or night in to remove entertainment option."
let userInput = prompt(confirmPrompt);

if(userInput === "yes"){
   console.log("The confirmation for your trip to " + array0 + " will be sent to the email on file.");
}
else if(userInput === "no") {
    function newFourOptions(array0, array1, array2, array3){
        let newResult = array0 + array1 + array2 + array3;
        return newResult;
    }
    let ConfirmPrompt = "Upon your arrival to the Heartbreak Hotel in " + array0 + ", the Concierge will confirm your reservation for " 
   + array1 + ". After dinner, " + array2 + " will take you to " + array3 + " Type yes to confirm, no to get a new trip, or night in to remove entertainment option."
   let nextUserInput = prompt(ConfirmPrompt);
   console.log("The confirmation for your trip to " + array0 + " will be sent to the email on file.");
}
else(userInput === "night in");{
    function noTainOptions(array0, array1, array2){
        let newTainResult = array0 + array1 + array2;
        return newTainResult;
}
    let newConfirmPrompt = "Upon your arrival to the Heartbreak Hotel in " + array0 + ", the Concierge will confirm your reservation for " 
    + array1 +  "Type yes to confirm, no to get a new trip."
    let newuserInput = prompt(newConfirmPrompt);
    console.log("The confirmation for your trip to " + array0 + " will be sent to the email on file."); 
    
alert("Thank you for booking with us!")
}