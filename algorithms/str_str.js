/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle) {
    return 0;
  }

  if(needle.length > haystack.length || !haystack || !haystack.length) {
    return -1;
  }

  let hayStackPointer = 0;
  let matchedNeedlePointer = -1;

  while (hayStackPointer < haystack.length) {
    if (haystack.substr(hayStackPointer, needle.length) === needle) {
      return hayStackPointer;
    }

    hayStackPointer++;
  }

  return matchedNeedlePointer;
};


console.log(strStr('abc', 'ab'));;
