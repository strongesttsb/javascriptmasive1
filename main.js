let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let evenNumbers = []; 
let oddNumbers = [];  


for (let number of array) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);  
    }
}

console.log("Четные числа:", evenNumbers);
console.log("Нечетные числа:", oddNumbers);
