// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:

['  *  ', ' *** ', '*****'][
  //And a tower with 6 floors looks like this:

  ('     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********')
];

function towerBuilder(nFloors) {
  let tower = [];
  let floorLength = nFloors * 2 - 1;

  for (let i = 0; i < nFloors; i++) {
    let numStars = i * 2 + 1;
    let numSpaces = (floorLength - numStars) / 2;
    let floor =
      ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);
    tower.push(floor);
  }

  return tower;
}
