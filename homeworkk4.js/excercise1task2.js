const names = ["luka" , "nika", "giorgi","saba", "joni", "anano","dato","sandro"];
console.log(`Number of names : ${names.length}`);
 console.log(`First name: ${names[0]}`);
// 
console.log(`Last name: ${names[names.length - 1]}`);

const middleIndex = Math.floor(names.length / 2)
console.log(`Middle name : ${names[middleIndex / 2]}`)