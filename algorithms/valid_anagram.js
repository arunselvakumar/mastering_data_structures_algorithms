/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const dict1 = {};
  const dict2 = {};

  for (let i = 0; i < s.length; i++) {
    if(dict1[s[i]] === undefined) {
      dict1[s[i]] = 1;
    } else {
      dict1[s[i]] = dict1[s[i]] + 1;
    }

    if(dict2[t[i]] === undefined) {
      dict2[t[i]] = 1;
    } else {
      dict2[t[i]] = dict2[t[i]] + 1;
    }
  }

  for (const dict1Key in dict1) {
    if(dict1[dict1Key] !== dict2[dict1Key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('anagram2', 'nagaram1'));
