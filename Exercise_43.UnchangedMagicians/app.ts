// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
type Magician = string;
const magicians: Magician[] = ["David Blaine", "Derren Brown" , "Criss Angel" , "Howard Thurston"];

function show_magicians(magicians: Magician[]): void {
    console.log(magicians.join("\n"));
}
function make_great(magicians : Magician[]): Magician[] {
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
