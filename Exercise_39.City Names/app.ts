// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city:string , country:string) : string {
    const formattedString = `${city} , ${country}`;
    return formattedString;
}
//Call the function with three city-country pairs
const pair1 = city_country("Lahore" , "Pakistan");
const pair2 = city_country("Chicago" , "USA");
const pair3 = city_country("Bangkok" , "Thailand");
console.log(pair1);
console.log(pair2);
console.log(pair3);
console.log(`Lahore,` , `Pakistan`);
console.log(`Chicago,` , `USA`);
console.log(`Bangkok,` , `Thailand`);