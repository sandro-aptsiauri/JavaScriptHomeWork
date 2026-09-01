const input = prompt("Give me a number:");
const num = Number(input);

if (num % 2 ===0){
    console.log(`${num} is even.`);

} else {
    console.log(`${num} is odd.`)
}


const score = 84 ;
if (score > 90 ) {
    console.log("A")
}
 else if (score > 80 ){
console.log("B");}

else if (score > 70 ){
    console.log("C")

}
else {
    console.log("F")
}
 
let n = Number(prompt("Count down from:"));
while (n > 0) {
    console.log(n);
    n--;
}
console.log("Liftoff!");

// const n = Number(prompt("Add up to :"));
// let total = 0;
// for (let i = 1; i <= n ; i++){
//     total += i ;
// }
console.log(`The sum of 1 to ${n} is ${total}`);

const inputWord = prompt("Type of word ");
const word = word.trim().toLowerCase();
let vowelCount = 0;
for(let i = 0; i < word.length; i++){

    const char = word[i];

if (char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
vowelCount += 1  ;
}
}
console.log(`"${word}" has ${vowelCount} vowels out of ${word.length} letters.`)


const age = Number(prompt)("How old are you?");
const inputName = prompt("What is your name?");
const name = inputName.trim().toLowerCase();

if (age < 18 ) {
    console.log("Sorry,you cannot enter");
    
} else if (age >= 21 && name === "nino"){
    console.log("Welcome,VIP!");

} else if (age % 2===0|| name === "giorgi"){
    console.log("You get a free drink!");

} else {
    console.log("Welcome in . Enjoy your evening.");
}
let m = 10;
while(m>0){
    console.log(m);
    m--;
}
