/**
 * Reverses the Given String.
 * @param {string} input Input String.
 * @return {string} Reverse String.
 */
function reverseString(input) {
  if (!input || input.length < 2 || typeof input !== 'string') {
    return input;
  }

  const reverseString = [];
  const length = input.length;
  for (let index = length - 1; index >= 0; index--) {
    reverseString.push(input[index]);
  }

  return reverseString.join('');
}

/**
 * Reverses the Given String.
 * @param {string} input Input String.
 * @return {string} Reverse String.
 */
function reverseString2(input) {
  if (!input || input.length < 2 || typeof input !== 'string') {
    return input;
  }

  return input.split('').reverse().join('');
}

test('Should return empty, if the input is empty', () => {
  expect(reverseString2('')).toBe('');
});

test('Should return given character, if the input is single character', () => {
  expect(reverseString2('A')).toBe('A');
});

test('Should return reverse string, if word is given', () => {
  expect(reverseString2('Code')).toBe('edoC');
});

test('Should return reverse string, if the word contains spaces', () => {
  expect(reverseString2('The Code')).toBe('edoC ehT');
});
