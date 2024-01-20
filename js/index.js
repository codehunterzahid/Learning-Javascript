
let modeBtn = document.querySelector("#btn");
let curMode = "light";

modeBtn.addEventListener("click", () => {
  if (curMode === "light") {
    curMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    modeBtn.style.backgroundColor = "white";
    modeBtn.style.color = "black";
    modeBtn.innerHTML = "Dark Mode";
  } else {
    curMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    modeBtn.style.backgroundColor = "black";
    modeBtn.style.color = "white";
    modeBtn.innerHTML = "Light Mode";
  }
});

/*
// takking modulus of a Number and check if it is multiple of 7

// let number = prompt("Enter a number");

// if (number % 7 === 0) {
//     console.log(number, "is multiple of 7");
// } else {
//     console.log(number, "is not a multiple of 7");
// }

// Taking input of marks and printing grades accordingly
{
let marks = prompt("Enter your marks");

if (marks >= 80 && marks <= 100) {
  // console.log("Grade A");
} else if (marks >= 70 && marks <= 79) {
  // console.log("Grade B");
} else if (marks >= 60 && marks <= 69) {
  // console.log("Grade C");
} else if (marks >= 50 && marks <= 59) {
  // console.log("Grade D");
} else {
  // console.log("Fail");
}
}
// using simple for loop printing even number

for (let a = 0; a <= 100; a = a + 2) {
  // console.log(a);
}

// Using if else to print even numbers

for (let a = 0; a <= 100; a++) {
  if (a % 2 === 0) {
    // console.log(a);
  }
}

// creating a game in which user entered number should matched with gameNumber

let gameNum = 13;

let guessNum = prompt("Guess a number");

while (guessNum != gameNum) {
  guessNum = prompt("Guess again");
}

// console.log("You guessed right");


// trying arrays methods
{
let marks = [87, 89, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let ave = marks.reduce((a, b) => a + b) / marks.length;

console.log(ave);

let mark = [87, 89, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let sum = 0;

for (let val of mark) {
  sum += val;
}

let avg = sum / mark.length;

// console.log(`Average is ${avg}`);
}

// program to apply discount on items array

let items = [200, 300, 400, 500, 900, 1200];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}

// console.log(items);

// program using array methods

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let newCompanies = companies.shift();

let newCompanies2 = companies.splice(1, 1, "Ola");

let newCompanies3 = companies.push("Amazon");

// console.log(companies);

// let myName = "Zahid";
// console.log(typeof myName);

// Creating a function having a str and printing vowels in that str
function strFunction(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      console.log(str[i]);
    }
  }
}

// strFunction("Hello I Love You");

// same function using arrow function
{
  const strFunction = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "A" ||
      str[i] === "e" ||
      str[i] === "E" ||
      str[i] === "i" ||
      str[i] === "I" ||
      str[i] === "o" ||
      str[i] === "O" ||
      str[i] === "u" ||
      str[i] === "U"
    ) {
      console.log(str[i]);
    }
  }
};
// strFunction("Hello I Love You");
}



// swaing two numbers without using third variable
let a = 10;
let b = 20;

console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log("\n", a, b);


//calculator

let operator = prompt("Enter any operator");
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

num1 = Number(num1);
num2 = Number(num2);

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
      console.log(num1 - num2);
  break;
  
  case "*":
      console.log(num1 * num2);
  break;

  case "/":
    console.log(num1 / num2);
  break;

  default:
    console.log("Invalid input");
}


// forEach loop
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((val)=>{
  console.log(val * val);
})


// using filter
let arr = [19, 92, 93, 24, 65];

let array = arr.filter((val) => {
  return val > 90 ;
})

console.log(array);


// taking number as input and printing sum and product

let n = prompt("Enter a number");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev , curr) => {
  return prev + curr;
})

console.log(sum)


let product = arr.reduce((prev , curr) => {
  return prev * curr;
})

console.log(product)


// username system generated

let name = prompt("Enter your Full Name");

name = name.toLowerCase().replace(/\s+/g, '');

let userName = `@${name}${name.length}`;
console.log(userName);




// classes and objects (also prototype)
let Data = `Name: ${name} \nAge: ${age} \nEmail: ${email}`;
class user{
  constructor(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
  }

  viewData(){
    console.log(Data);
  }
}

class Admin extends user{
  constructor(name, age, email, role){
    super(name, age, email);
    this.role = role;
  }

  editData(){
    Data = `Name: ${this.name} \nAge: ${this.age} \nEmail: ${this.email} \nRole: ${this.role}`
  }
}

let student = new user("zahid", 20, "zahid@123");
let teacher = new user("Shahzad", 27, "shahzad@123");

let admin = new Admin("Shahzaib", 20, "shahzaib@123", "admin");

*/

const players = [
  {name: "Zahid", age: 40},
  {name: "Shahzad", age: 27},
  {name: "Shahzaib", age: 22},
  {name: "Ali", age: 21},
  {name: "Ahmed", age: 10},
  {name: "Usman", age: 20},
  {name: "Umar", age: 18},
  {name: "Rizwan", age: 20},
  {name: "Hassan", age: 14},
  {name: "Bakar", age: 20},
];

const adults = players.filter((val) => {
  if(val.age > 20){
    return val;
  }
})

// console.log(adults);


const employees = [
  {name: "Zahid", age: 40, gender : "male", city: "lahore"},
  {name: "Shahzad", age: 27, gender : "female", city: "karachi"},
  {name: "Shahzaib", age: 22, gender : "male", city: "lahore"},
  {name: "Ali", age: 21, gender : "female", city: "karachi"},
  {name: "Ahmed", age: 10, gender : "male", city: "lahore"},
  {name: "Usman", age: 20, gender : "female", city: "karachi"},
  {name: "Umar", age: 18, gender : "male", city: "karachi"},
  {name: "Rizwan", age: 20, gender : "female", city: "lahore"},
  {name: "Hassan", age: 14, gender : "female", city: "karachi"},
  {name: "Bakar", age: 20, gender : "female", city: "lahore"},
];

const headOfficeEmployees = {
  "from-lahore": employees.filter((val)=> val.city === "lahore"),
  "from-karachi": employees.filter((val)=> val.city === "karachi"),
  "age-above-20" : employees.filter((val)=> val.age > 20),
  "age-below-20" : employees.filter((val)=> val.age < 20),
  "gender-male": employees.filter((val)=> val.gender === "male"),
  "gender-female": employees.filter((val)=> val.gender === "female"),
}

const getData = headOfficeEmployees["age-above-20"];
// console.log(getData)
