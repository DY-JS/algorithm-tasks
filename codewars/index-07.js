//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let res = [];
  let ar = [...text.toLowerCase()];
  ar.forEach((w, i, arr) => {
    if (arr.indexOf(w) !== arr.lastIndexOf(w)) {
      res.push(w);
    }
  });

  return new Set(res).size;
}
