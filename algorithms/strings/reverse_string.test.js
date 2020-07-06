/**
 * Reverses the Given String.
 * @param {string} input Input String.
 * @return {string} Reverse String.
 */
function reverseString(input) {
  if (!input || input.length < 2) {
    return input;
  }

  const reverseString = [];
  const length = input.length;
  for (let index = length - 1; index >= 0; index--) {
    reverseString.push(input[index]);
  }

  return reverseString.join('');
}

test('Should return empty, if the input is empty', () => {
  expect(reverseString('')).toBe('');
});

test('Should return given character, if the input is single character', () => {
  expect(reverseString('A')).toBe('A');
});

test('Should return reverse string, if word is given', () => {
  expect(reverseString('Code')).toBe('edoC');
});

test('Should return reverse string, if the word contains spaces', () => {
  expect(reverseString('The Code')).toBe('edoC ehT');
});
