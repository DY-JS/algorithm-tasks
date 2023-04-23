function findOutlier(integers) {
  // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
  // Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.

  const evenNums = integers.filter((num) => num % 2 == 0);
  const oddNums = integers.filter((num) => num % 2 !== 0);
  return evenNums.length == 1 ? evenNums[0] : oddNums[0];
}
