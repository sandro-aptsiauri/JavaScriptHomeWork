
const a = 10
const b = 20
console.log(a+b)



const name="Sandro"
const age=28
const height=1.90
console.log(`My name is ${name},I am ${age} years old and my height is ${height} meters`)


const width=5;
const height1=3;
console.log("Area:",width*height1 )
console.log("Perimeter:",2*(width+height1))



const number=10
console.log("Is Evene:",number%2===0);


const secondsInMinute=60;
const minutesInHour=60;
const hoursInDay=24;
const daysInWeek=7;

const secondsInDay=secondsInMinute*minutesInHour*hoursInDay;
const secondsInWeek=secondsInDay*daysInWeek;
console.log("Seconds in a day;",secondsInDay);
console.log("seconds in a week;",secondsInWeek);


const a1="42";
const b1=42;
const c=true;
const d=3.14;
console.log(typeof a1,typeof b1,typeof c,typeof d);
console.log(`"42"==42;,a1==b1;`)
console.log(`"42"===42;,a1===b1;`)
console.log(`true==1;,c==1;`)

const age1=20
const hasTicket=true
const isStudent=false
console.log("Adult with ticket;",age1>=18 && hasTicket);
console.log("Student or has ticket;",isStudent || hasTicket);
console.log("Not a studnet;",!isStudent);
console.log("Under 18 or no ticket:", age1 < 18 || !hasTicket);
console.log("Adult and not a student:", age1>=18 && !isStudent);

const inputAge="21";
const age2=Number(inputAge);
const yearsleft=100-age2;
console.log(`You have ${yearsleft}years left untill you turn 100 years old.`)