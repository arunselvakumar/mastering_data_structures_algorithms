function execute(array) {
  const map = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (map[element]) {
      return element;
    } else {
      map[element] = element;
    }
  }

  return 0;
}

describe('first_recurring_character', () => {
  test('should return 0, if no characters are repeated', () => {
    const output = execute([1, 2, 3, 4, 5]);
    expect(output).toBe(0);
  });

  test('should return 2, if 2 is repeated', () => {
    const output = execute([1, 2, 3, 4, 5, 2]);
    expect(output).toBe(2);
  });

  test('should return 3, if 3 is repeated', () => {
    const output = execute([1, 2, 3, 3, 5]);
    expect(output).toBe(3);
  });

  test('should return 4, if 4 is repeated', () => {
    const output = execute([4, 4, 4, 4, 4]);
    expect(output).toBe(4);
  });

  test('should return 0, if the array is empty', () => {
    const output = execute([]);
    expect(output).toBe(0);
  });
});
