//Task_42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
type Magician = string;
const magicians: Magician[] = ["David Blaine", "Derren Brown" , "Criss Angel"];

function show_magicians(magicians: Magician[]): void {
    console.log(magicians.join("\n"));
}
function make_great(magicians : Magician[]): Magician[] {
    return magicians.map((magician) => `${magician}, the Great.`);
}

show_magicians(magicians);
const greatMagicians = make_great(magicians);
console.log("\nModified List:");
show_magicians(greatMagicians);
