//91
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

////92;
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) return;
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

//93
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  }

  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}

//94
const myDog = {
  // Only change code below this line
  name: 'Dog',
  legs: 4,
  tails: 1,
  friends: [],
  // Only change code above this line
};

//95
// Setup
const testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

// Only change code below this line
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//96
// const testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };

// Only change code below this line
// const entreeValue = testObj["an entree"];   // Change this line
// const drinkValue = testObj["the drink"];

//97
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 16;  // Change this line
// const player = testObj[playerNumber];   // Change this line

//98
