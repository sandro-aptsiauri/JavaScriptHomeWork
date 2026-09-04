
const numbers = [4,7,8,6,2,4,9,24,60,25,88,74,96,24,65,78,42,32,27,45];
console.log(numbers);

const find = 25;
let count = 0;


for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] === find) {
    count++; 
  }
}

console.log(`${find} appears ${count} times`);