// takking modulus of a Number and check if it is multiple of 7

// let number = prompt("Enter a number");

// if (number % 7 === 0) {
//     console.log(number, "is multiple of 7");
// } else {
//     console.log(number, "is not a multiple of 7");
// }


// Taking input of marks and printing grades accordingly

/*

let marks = prompt("Enter your marks");

if(marks >= 80 && marks <= 100){
    console.log("Grade A");
} else if(marks >= 70 && marks <= 79){
    console.log("Grade B");
} else if(marks >= 60 && marks <= 69){
    console.log("Grade C");
} else if(marks >= 50 && marks <= 59){
    console.log("Grade D");
} else {
    console.log("Fail");
}
*/


/*

// using simple for loop printing even number 

for(let a = 0; a <= 100; a = a+2){
    console.log(a);
}

// Using if else to print even numbers 

for(let a = 0; a <= 100; a++){
    if(a%2 === 0){
        console.log(a);
    }
}
*/

/*
// creating a game in which user entered number should matched with gameNumber

let gameNum = 13;

let guessNum = prompt("Guess a number");

while(guessNum != gameNum){

    guessNum = prompt("Guess again");

}

console.log("You guessed right");
*/

/*
// username system generated

let name = prompt("Enter your Full Name");

name= name.toLowerCase();

let userName = `@${name}${name.length}`;

console.log(userName);
*/

/*
let marks = [87, 89, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let ave = marks.reduce((a, b) => a + b) / marks.length;

console.log(ave)

let mark = [87, 89, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let sum = 0;

for (let val of mark) {
    sum += val;
}

let avg = sum/mark.length;

console.log(`Average is ${avg}`);
*/

/*
// program to apply discount on items array 

let items = [200, 300, 400, 500, 900, 1200];

for (let i = 0; i < items.length ; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);
*/


/*
// program using array methods

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let newCompanies = companies.shift();

let newCompanies2 = companies.splice(1,1, "Ola");

let newCompanies3 = companies.push("Amazon");

console.log(companies);
*/