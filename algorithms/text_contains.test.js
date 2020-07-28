function execute(magazineText, textToBeTested) {
  const magazineCharacters = magazineText.split('');
  const magazineTextDictionary = {};

  if (!magazineCharacters || !magazineText || !magazineCharacters.length || !magazineText.length) {
    return false;
  }

  if (magazineText === textToBeTested) {
    return true;
  }

  magazineCharacters.forEach(element => {
    if (magazineTextDictionary[element] !== undefined) {
      magazineTextDictionary[element] = magazineTextDictionary[element] + 1;
    } else {
      magazineTextDictionary[element] = 0;
    }
  });

  const charactersInText = textToBeTested.split('');

  for (i = 0; i < charactersInText.length; i++) {
    if (magazineTextDictionary[charactersInText[i]] >= 0) {
      magazineTextDictionary[charactersInText[i]] = magazineTextDictionary[charactersInText[i]] - 1;
    } else {
      return false;
    }
  }

  return true;
}

describe('text_contains', () => {
  test('should return true, if the text is present', () => {
    const output = execute('aabbc', 'aab');
    expect(output).toBe(true);
  });

  test('should return true, if the text is same', () => {
    const output = execute('aab', 'aab');
    expect(output).toBe(true);
  });

  test('should return true, if the text is same', () => {
    const output = execute('aab', 'aab');
    expect(output).toBe(true);
  });

  test('should return true, if the text is reverse', () => {
    const output = execute('aab', 'baa');
    expect(output).toBe(true);
  });

  test('should return false, if the text is not present 1', () => {
    const output = execute('aaba', 'xyz');
    expect(output).toBe(false);
  });
});
