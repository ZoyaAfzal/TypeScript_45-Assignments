"use strict";
const magicians = ["David Blaine", "Derren Brown", "Criss Angel"];
function show_magicians(magicians) {
    console.log(magicians.join("\n"));
}
function make_great(magicians) {
    return magicians.map((magician) => `${magician}, the Great.`);
}
show_magicians(magicians);
const greatMagicians = make_great(magicians);
console.log("\nModified List:");
show_magicians(greatMagicians);
