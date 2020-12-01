const isValidNumber = (s) => {
  return s.charCodeAt(0) >= 48 && s.charCodeAt(0) <=  57;
}

const isValidUpperCase = (s) => {
  return s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90;
}

const isValidLowerCase = (s) => {
  return s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122;
}

const isPalindrome = function(s) {
  if(!s || !s.length) {
    return true;
  }

  let i = 0;
  let j = s.length - 1;
  let isValidPalindrome = true;

  while (i<=j) {
    if(!isValidNumber(s[i]) && !isValidLowerCase(s[i]) && !isValidUpperCase(s[i])) {
      i = i + 1;
      continue;
    }

    if(!isValidNumber(s[j]) && !isValidLowerCase(s[j]) && !isValidUpperCase(s[j])) {
      j = j - 1;
      continue;
    }

    if(isValidNumber(s[i]) || isValidNumber(s[j])) {
      if(s[i] !== s[j]) {
        isValidPalindrome = false;
        break;
      }
    }

    if(isValidLowerCase(s[i])) {
      if(isValidLowerCase(s[j])) {
        if(s[i] !== s[j]) {
          isValidPalindrome = false;
          break;
        }
      }

      if(isValidUpperCase(s[j])) {
        if(s[i].charCodeAt(0) - s[j].charCodeAt(0) !== 32) {
          isValidPalindrome = false;
          break;
        }
      }
    }

    if(isValidUpperCase(s[i])) {
      if (isValidUpperCase(s[j])) {
        if(s[i] !== s[j]) {
          isValidPalindrome = false;
          break;
        }
      }

      if(isValidLowerCase(s[j])) {
        if(s[j].charCodeAt(0) - s[i].charCodeAt(0) !== 32) {
          isValidPalindrome = false;
          break;
        }
      }
    }

    i = i + 1;
    j = j - 1;
  }

  return isValidPalindrome;
};

console.log(isPalindrome('ab2a'));


