
const numbers = [42, 7, -15, 100, 23, 8, 91, 55, 3, -25, 67, 12, 89, 4, 18];


let min = numbers[0];


for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i]; 
  }
}


console.log(`The smallest number is ${min}`);