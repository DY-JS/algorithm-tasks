// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation
// IA pangram — это предложение, которое содержит каждую букву алфавита хотя бы по одному разу. Например, предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет). Учитывая строку, определите, является ли она панграммой.

function isPangram(string) {
  const size = [...new Set(string.toLowerCase().match(/[a-zA-Z]/gi) || [])]
    .length;
  return size === 26;
}
