let sortedArray = function(unSortedArrray) => {
  const unSortedArrayLength = unSortedArray.length();
  const sortedArray = [];

  let i = 0;
  while(i <= unSortedArrayLength) {
    let elementToBePushed = unSortedArray[i];
    let sorted = false;
    let slicedArray = [];
    let j = 0;
    while(j<unSortedArray.length + 1)   {
      if(sortedArray.length === 0) {
        sortedArray.push(elementToBePushed)
      } else {
        if(sortedArray[j] < elementToBePushed) {
          j++;
        } else {
          slicedArray = sortedArray.slice(j + 1, sortedArray.length)
          sortedArray[j] = elementToBePushed;
          break;
        }
      }
    }
    sortedArray = [...sortedArray, ...slicedArray];
  }

  return sortedArray;
}
