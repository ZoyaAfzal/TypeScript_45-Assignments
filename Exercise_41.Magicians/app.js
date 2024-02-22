"use strict";
//Task_41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["David Blaine", "Derren Brown", "Criss Angel"];
show_magicians(magicianNames);
