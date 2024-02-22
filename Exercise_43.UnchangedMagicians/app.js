"use strict";
const magicians = ["David Blaine", "Derren Brown", "Criss Angel", "Howard Thurston"];
function show_magicians(magicians) {
    console.log(magicians.join("\n"));
}
function make_great(magicians) {
    return magicians.map((magician) => `${magician}, the Great.`);
}
const magiciansCopy = [...magicians];
const greatMagicians = make_great(magiciansCopy);
//Original Magicians:
console.log("Original Magicians");
show_magicians(magicians);
//Great Magicians:
console.log("\nMagicians, the Great");
show_magicians(greatMagicians);
