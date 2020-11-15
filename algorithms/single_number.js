let inputArray = [1, 2, 2, 3, 1];

var getSingleNumber = function (nums) {
  let valueToReturn = null;
  const dictionary = {};

  if (!nums || !nums.length) {
    return valueToReturn;
  }

  for (let index = 0; index < nums.length; index++) {
    if (dictionary[nums[index]]) {
      dictionary[nums[index]] = dictionary[nums[index]] + 1;
    } else {
      dictionary[nums[index]] = 1;
    }
  }

  for (const key in dictionary) {
    if (dictionary[key] === 1) {
      valueToReturn = key;
      break;
    }
  }

  return valueToReturn;
};

console.log(getSingleNumber(inputArray));