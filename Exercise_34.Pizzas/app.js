"use strict";
//Task_34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!
const favpizzas = ["Fajita", "Pepperoni", "Cheesy Bite"];
console.log("My Favourite Pizzas:");
for (let pizza of favpizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("Cheesy Pizza is my one of the most popular choices and i love biting into a crispy,salty around of pepporoni.");
console.log("I love Fajitas too filled with caramelized onions plus strips of red and yellow bell peppers.");
console.log("I utterly adored Pizzas! I really love Pizza!");
