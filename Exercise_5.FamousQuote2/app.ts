//Repeat Exercise 4, but this time store the famous person's name in a variable called famous_person.
//Then compose your message and store it in a new variable called message.Print your message.

let famous_person: string = "Bill Gates";
let quote: string = "Everyone needs a coach. It doesn't matter whether you're a basketball player, a tennis player, a gymnast or a bridge player.";
let message: string =`${famous_person} once said, "${quote}"`;

console.log(message);