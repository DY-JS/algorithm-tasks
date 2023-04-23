//Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of �3n3 , the cube above will have volume of (�−1)3(n−1)3  and so on until the top which will have a volume of 1313 .

function findNb(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}
