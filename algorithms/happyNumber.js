/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  let currentNumber = n;
  const numbersList = [];

  while (true) {
    let number = currentNumber;
    let newNumber = 0;
    while (number) {
      const digit = number % 10;
      number = Math.floor(number/10);

      newNumber = newNumber + Math.pow(digit, 2);
    }

    if (newNumber === 1) {
      return true;
    } else {
      if(numbersList.includes(newNumber)) {
        return false;
      }

      numbersList.push(newNumber);
      currentNumber = newNumber;
    }
  }
};


console.log(isHappy(1111111));;
