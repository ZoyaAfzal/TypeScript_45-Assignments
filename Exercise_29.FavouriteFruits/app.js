"use strict";
//Task_29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favFruits = ["Mango", "Orange", "Banana"];
if (favFruits.includes("Banana")) {
    console.log("You really like Bananas!");
}
else {
    console.log("Banana is not in your favourite fruit list");
}
if (favFruits.includes("Mango")) {
    console.log("You really like Mangoes!");
}
else {
    console.log("Mango is not in your favourite fruit list");
}
if (favFruits.includes("Strawberry")) {
    console.log("You really like Strawberries!");
}
else {
    console.log("Strawberry is not in your favourite fruit list");
}
if (favFruits.includes("Orange")) {
    console.log("You really like Oranges!");
}
else {
    console.log("Orange is not in yiur favourite fruit list");
}
if (favFruits.includes("Cherry")) {
    console.log("You really like Cherries!");
}
else {
    console.log("Cherry is not in your favourite fruit list");
}
