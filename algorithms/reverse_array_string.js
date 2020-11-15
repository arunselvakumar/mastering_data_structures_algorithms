let inputArray = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {
  for (let index = 0; index < s.length / 2; index++) {
    if (!s || !s.length) {
      return [];
    }

    if (s.length == 1) {
      return;
    }

    const element = s[index];

    s[index] = s[(s.length - 1) - index];
    s[(s.length - 1) - index] = element;
  }
};

reverseString(inputArray);
console.log(inputArray);
