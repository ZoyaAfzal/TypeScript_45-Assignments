"use strict";
/*Task no13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let vehicles = ["Ferrari296GTB", "BMW X6", "Audi Rs e-tron GT", "Rolls-Royce 2023"];
console.log(vehicles[2] + " " + "&" + " " + vehicles[3] + "are the most luxurious cars");
console.log("I wish i can buy" + " " + vehicles[1]);
console.log("My most favourite car is" + " " + vehicles[0]);
vehicles.map((items) => console.log(`I would like to own  ${items}`));
