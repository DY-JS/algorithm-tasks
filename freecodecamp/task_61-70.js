//61
function myLocalScope() {
  // Only change code below this line
  var myVar = 50;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// 62
// Setup
const outerWear = 'T-Shirt';

function myOutfit() {
  // Only change code below this line

  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

// 63
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();

// 64
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//65
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
}

//66
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//67
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) return 'Yes, that was true';
  return 'No, that was false';

  // Only change code above this line
}

//68
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

testEqual(10);

//69
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

testStrict(10);

// 70
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

compareEquality(10, '10');
