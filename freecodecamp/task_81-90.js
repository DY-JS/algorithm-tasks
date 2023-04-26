//81
function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return 'Outside';
  }
  // Only change code above this line
  return 'Inside';
}

//82
function testElse(val) {
  let result = '';
  // Only change code below this line

  if (val > 5) {
    result = 'Bigger than 5';
  } else {
    result = '5 or Smaller';
  }

  // Only change code above this line
  return result;
}

testElse(4);
