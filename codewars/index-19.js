// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

Example: function findMissingLetter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentCharCode = arr[i].charCodeAt(0);
    const nextCharCode = arr[i + 1].charCodeAt(0);
    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
}

// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }
