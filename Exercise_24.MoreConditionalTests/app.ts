// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
const color1 : string = "Red";
const color2 : string = "Violet";
console.log(color1 != color2);
console.log(color1 == color2);

//• Tests using the lower case function:
const dressCode : string = "Pant Coat";
console.log(dressCode.toLowerCase() === "pant coat");
console.log(dressCode.toLowerCase() === "pantcoat");


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 : number = 6;
const num2 : number = 4;
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


//• Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

//• Test whether an item is in a array
const fruits: string[] = ["Strawberries", "Kiwi", "Rasp Berries", "Pomegranates"," Cherries"];
console.log(fruits.includes("Rasp Berries"));

//• Test whether an item is not in a array
const Fruits: string[] = ["Strawberries", "Kiwi", "Rasp Berries", "Pomegranates"," Cherries"];
console.log(Fruits.includes("rasp berries"));
console.log(Fruits.includes("Grapes"));



