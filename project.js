// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to 
// reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

console.log(ages[ages.length-1] - ages[0]);

// Add a new age to your array and repeat the step above to 
// ensure it is dynamic (works for arrays of different lengths).

ages.push(44);

console.log(ages[ages.length-1] - ages[0]);

// Use a loop to iterate through the array and calculate the average age. 
// Print the result to the console.

function avgAge(ages) {
    let total = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / ages.length;
}

console.log(avgAge(ages));

// Create an array called names that contains the following values:
//  ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Use a loop to iterate through the array and calculate the average 
// number of letters per name. Print the result to the console.
let lettersPerName = names.map(function(element) {
    return element.length;
})
console.log(lettersPerName);

function avgLengths(lettersPerName) {
    let total = lettersPerName.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / lettersPerName.length;
}
console.log(avgLengths(lettersPerName));

// Use a loop to iterate through the array again and concatenate 
// all the names together, separated by spaces, and print the result to the console.

console.log(names.join(', '));

// How do you access the last element of any array?
// array[array.length-1];

//How do you access the first element of any array?
// array[0];

// Create a new array called nameLengths. Write a loop to iterate 
// over the previously created names array and add the length of each 
// name to the nameLengths array. For example: namesArray = ["Kelly", "Sam", "Kate"] given this array
// name Lengths = [5, 3, 4] create this new array
let nameLengths = names.map(function(element){
    return element.length;
})
console.log(nameLengths)

// Write a loop to iterate over the nameLengths 
// array and calculate the sum of all the elements in the array. 
// Print the result to the console.
function sumOfElements(array) {
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
}
console.log(sumOfElements(nameLengths));

// Write a function that takes two parameters, word and n, as arguments 
// and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to 
// return ‘HelloHelloHello’).


function wordRepeat(word, n) {
    let repetition = "";
    while(n > 0) {
        repetition += word;
        n--;
    }
    return repetition;
}
console.log(wordRepeat("Zac", 10));

// Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the 
// last name separated by a space).
function fullName(firstName, lastName) {
    let firstLastName = firstName + " " + lastName;
    return firstLastName;
}
console.log(fullName("Sam", "Iam"));

// Write a function that takes an array of numbers 
// and returns true if the sum of all the numbers in the 
// array is greater than 100.
function trueIfOver100(array) {
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if(total > 100) {
        return true;
    } 
}  
let brother = [1, 2, 4, 8, 16, 32];
let sister = [1, 50, 20, 14, 16];
console.log(trueIfOver100(brother));
console.log(trueIfOver100(sister));

// Write a function that takes an 
// array of numbers and returns the average of 
// all the elements in the array
function arrayAvg (array) {
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / array.length;
}
console.log(arrayAvg(brother));
console.log(arrayAvg(sister));

// Write a function that takes two arrays of numbers and returns 
// true if the average of the elements in the first array is greater 
// than the average of the elements in the second array.
function arrayAverageComp(array1, array2) {
    let array1Total = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let array2Total = array2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let array1Avg = array1Total / array1.length;
    let array2Avg = array2Total / array2.length;
    if(array1Avg > array2Avg) {
        return true;
    } else {
        return false;
    }
}
console.log(arrayAverageComp(brother, sister));
console.log(arrayAverageComp(sister, brother));

// Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside and if 
// moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false;
    }
}


// Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

// I wrote a function to calculate how many pizzas to buy for a given group of people, a mix of both adults and children, and 
// of those who are hungry and those who aren't. I found the "fat arrow" function stuff for ES6 when searching for possibilities
// for my project online. I wanted to be able to pass in an array of objects, each item of which represents a person who is either an
// adult or a child and either hungry or not. My function then uses the filter array method to go through that array twice to 
// count out how many hungry children there are and how many hungry adults. I then assume the most an average hungry child could
// eat would be 2 slices and the most an average hungry adult could eat would be three slices, so I add them up, and then to find
// the number of pizzas, I totaled the slices and divided by 8. I found the "Math.ceil()" function that always rounds up, since I 
// didn't think it would be wise to round down. It's a much better problem to have too much pizza than not enough.


function howMuchPizza(array) {
    let hungryKid = array.filter(item => (item.hungry === true && item.adult === false)).length;
    let hungryAdult = array.filter(item => (item.adult === true && item.hungry === true)).length;
    let numberOfPizzas = Math.ceil(((hungryKid * 2) + (hungryAdult * 3)) / 8);
    return "You need to buy " + numberOfPizzas +" pizzas to feed this group."
}

let hungryFamily = [
    { name: "Dad",
      hungry: true, 
      adult: true
    },
    { name: "Mom",
      hungry: false,
      adult: true
      },
    { name: "Robby",
      hungry: true,
      adult: false},
      {name: "HennyPenny",
       hungry: true,
        adult: false},
    { name: "Vivi",
      hungry: true,
      adult: false},
      {name: "Teddy",
       hungry: true,
       adult: false},
    { name: "Grandpa",
      hungry: true,
     adult: true}
]

let kidsParty = [
    { name: "Kid1", hungry: true, adult: false},
  { name: "Kid2", hungry: false, adult: false},
  { name: "Kid3", hungry: true, adult: false},
  {name: "Kid4", hungry: true, adult: false},
  { name: "Kid5", hungry: true, adult: false},
 { name: "Kid6", hungry: true, adult: false},
 { name: "Kid7", hungry: true, adult: false},
 {name: "Parent1", hungry: true, adult: true},
 { name: "Parent2", hungry: true, adult: true},
 { name: "Parent3", hungry: true, adult: true},
 { name: "Parent4", hungry: true, adult: true},
 { name: "Parent5", hungry: true, adult: true},
{ name: "Parent6", hungry: true, adult: true},
{ name: "Parent7", hungry: true, adult: true}
]
console.log(howMuchPizza(hungryFamily));
console.log(howMuchPizza(kidsParty));