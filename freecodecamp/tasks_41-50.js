// 41 Create a variable called myData and set it to equal the first value of myArray using bracket notation.

const myArray = [50, 60, 70];
const myData = myArray[0];

//////////////////////////////////////////////////////////////
// 42  Modify the data stored at index 0 of myArray to a value of 45.

// const myArray = [18, 64, 99];
// myArray[0] = 45;

////////////////////////////////////////////////////////
// 43 Using bracket notation select an element from myArray such that myData is equal to 8.

// const myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// const myData = myArray[2][1];

////////////////////////////////////////

// 44 Push ["dog", 3] onto the end of the myArray variable.

// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

///////////////////////////////////////////
// 45 Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray = myArray.pop();

//////////////////////////////////////////////
//46 Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();
///////////////////////////////////////////////
// 47 Add ["Paul", 35] to the beginning of the myArray variable using unshift().

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);
///////////////////////////////////////////////
// 48 The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

['Chocolate Bar', 15];
//There should be at least 5 sub-arrays in the list.

const myList = [];
const li1 = ['Anna', 15];
const li2 = ['Valia', 16];
const li3 = ['Vera', 17];
const li4 = ['Tania', 18];
const li5 = ['Dida', 19];
myList.push(li1, li2, li3, li4, li5);
///////////////////////////////////////////////
// 49 Create a function called reusableFunction which prints the string Hi World to the dev console.
//Call the function.

function reusableFunction() {
  console.log('Hi World');
}

reusableFunction();
///////////////////////////////////////////////
// 50.  Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(20, 30);
///////////////////////////////////////////////

///////////////////////////////////////////////
