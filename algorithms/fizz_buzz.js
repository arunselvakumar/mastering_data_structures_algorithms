/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const fizzBuzzArray = [];

  if(!n) {
    return fizzBuzzArray;
  }

  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push('FizzBuzz');
    } else if(i % 3 === 0) {
      fizzBuzzArray.push('Fizz');
    } else if(i % 5 === 0) {
      fizzBuzzArray.push('Buzz');
    } else {
      fizzBuzzArray.push(i.toString());
    }
  }

  return fizzBuzzArray;
};

console.log(fizzBuzz(15));
