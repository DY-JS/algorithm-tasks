//51 Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
  return num * 5;
}

// 52 Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
// dgfdgdgdfg
// Declare the myGlobal variable below this line
let myGlobal;
myGlobal = 10;
let oopsGlobal;

function fun1() {
  oopsGlobal = 5;
  // Assign 5 to oopsGlobal here
}

// Only change code above this line

function fun2() {
  let output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += ' oopsGlobal: ' + oopsGlobal;
  }
  console.log(output);
}

console.log('Hello, Lev!');
