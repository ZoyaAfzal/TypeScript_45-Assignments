//Task_35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.
//You could print a sentence such as Any of these animals would make a great pet!
const animals: string[] = ["Dog", "Cat", "Horse"];
//list of animal names
console.log("Names of Animals that has similar characteristics:")
for(const animal of animals){
    console.log(animal);
    }

//statement about each animal
console.log("\nStatements about Animals:")
for(const animal of animals){
    switch(animal){
        case "Dog":
            console.log("A Dog would make a great pet.");
            break;
        case "Cat":
            console.log("A Cat is playful animal and enjoy socialising with people.");
            break;
        case "Horse":
            console.log("A Horse is also categorizes as social,aloof,chalenging and fearful.");
            break;
        default:
            console.log("This animal is not Similar.");
           break;
        }
}

//the common characteristics
console.log("\nAny of these animals would make a great pet!");