function twoNumberSum1(array, targetSum) {
  const length = array.length;
  let firstItem = undefined;
  let secondItem = undefined;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if(i !== j && array[i] + array[j] === targetSum) {
        firstItem = array[i];
        secondItem = array[j];
        break;
      }
    }
  }

  if(firstItem !== undefined && secondItem !== undefined) {
    return [firstItem, secondItem];
  }

  return [];
}

function twoNumberSum2(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;

    if(potentialMatch in nums) {
      return [potentialMatch, num]
    } else {
      nums[num] = true;
    }
  }

  return [];
}

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    if(array[leftPointer] + array[rightPointer] === targetSum) {
      return[array[leftPointer], array[rightPointer]];
    } else if(array[leftPointer] + array[rightPointer] < targetSum) {
      leftPointer++;
    } else if(array[leftPointer] + array[rightPointer] > targetSum) {
      rightPointer--;
    }
  }

  return [];
}

console.log(twoNumberSum([3, 2, 19, 0, -1, 7], 10));


// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;
