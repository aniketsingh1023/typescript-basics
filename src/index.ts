// Strictly Typed Language Configuration

//lesser runtime errors
//complied language
//more safer to write you code in this language
//helps in large scale application development
//makes code more readable and maintainable

//can have more runtime errors and complie time error
//typescript never executes directl actually just get complied down to javascript
//in browser typescript is not understood directly

//typescript is superset of javascript
//all javascript code is valid typescript code
//but all typescript code is not valid javascript code

//typescript need to be compiled down to javascript using tsc command

//tsc --init  --> to create tsconfig.json file

//tsconfig.json file is used to configure the typescript compiler options

//tsc filename.ts  --> to compile a typescript file to javascript file

//node filename.js  --> to run the compiled javascript file using nodejs

//to watch changes in typescript file and compile automatically use
//tsc filename.ts --watch or tsc --watch

//to compile all typescript files in a project use
//tsc --project tsconfig.json or simply tsc

//installing typescript globally
//npm install -g typescript

//checking typescript version
//tsc --version or tsc -v

//installing typescript locally in a project
//npm install --save-dev typescript

//using npx to run typescript compiler without installing globally
//npx tsc filename.ts

let x: number = 1; //type safety

// x = "anik"; // will give error because x is of type number
console.log(x);

let firstName: String = "aniket"; // will give error because int is not a valid type in typescript
function greet(name: String) {
  return "Hello, " + firstName;
}
greet("Aniket");

// type : any -- can hold any type of value in typescript

function Sum(numberOne: number, NumberTwo: number) {
  let sum: number = numberOne + NumberTwo;
  console.log(sum);
  return "Sum of the two Numbers" + numberOne + "and" + NumberTwo + "is" + sum;
}
Sum(12, 31);

function AgeVerification(age: number) {
  if (age >= 18) {
    return "Age Verified : User Is An Adult";
  }

  return "Age Not Verified , You Will Not Proceed";
}
console.log(AgeVerification(21));

// a function which takes another function as an input
// and runs it after 1 sec
function delayedCall(fn: () => void) {
  // function returning nothing -- this is how we assign an empty function of any type , void is the type of te function
  setTimeout(fn, 1000);
}
function log() {
  console.log("Function Calling Another Function After 1 Sec Was Succesfull");
}
delayedCall(log);

//type of an object in typescript
let user: { //this is how we an object with types in typescript similarly in functions
  firstName : string,
  age: number
} = {
  firstName: "Aniket",
  age : 21
}
//type of this object is {
// firstname : String, 
//. age : Number
//.   

function object (user: {
  firstName : string, // we have to define same tyoes again and again like this --> solution is to use types or interfaces
  age : number
}){
 
}
          

