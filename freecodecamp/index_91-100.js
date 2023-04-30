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
