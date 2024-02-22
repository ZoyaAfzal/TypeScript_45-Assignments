"use strict";
/* 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/
function order_sandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected, Please select an item from our Menu.");
    }
    else {
        console.log("Items:");
        for (const item of items) {
            console.log("-" + item);
        }
    }
    console.log("Enjoy your Sandwich!");
    console.log("Don't forget to give your reviews about Sandwich taste and quality!");
}
order_sandwich("Garlic Mayo", "Club Sandwich", "Steak Sandwich");
order_sandwich("Spiced Chicken Barbeque", "Fried Chicken Waffle");
order_sandwich();
