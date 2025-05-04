/*
you are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a 
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the 
given integer
*/
/*
function CalSum(Number){
    if(typeof Number !== 'number' || Number<=0 || !Number.isInteger(Number)){
        console.log("Please provide a positive integer as input")
        return;
    }
           let sum = 0;
           let number = 1;

do {
    sum += number;
    number++;
} while (number <= Number);
    console.log(The sum of numbers from 1 to ${Number} is : ${sum});
}
CalSum(5);*/
/*

function calculateSum(inputNumber) {
    // Ensure the input is a positive integer
    if (typeof inputNumber !== 'number' || inputNumber <= 0 || !Number.isInteger(inputNumber)) {
        console.log("Please provide a positive integer as input.");
        return;
    }
    let sum = 0;
    let currentNumber = 1;

    do {
        sum += currentNumber;
        currentNumber++;
    } while (currentNumber <= inputNumber);

    console.log(The sum of numbers from 1 to ${inputNumber} is: ${sum});
}

// Example usage:
calculateSum(5);  //  15"
calculateSum(10); // 55"
calculateSum(-3); // Will print "Please provide a positive integer as input."
calculateSum(3.5); // Will print "Please provide a positive integer as input."
*/

let numEnd = 30;
let i = 1;
do{
    console.log(i)
    i++;
}while(i <=numEnd)