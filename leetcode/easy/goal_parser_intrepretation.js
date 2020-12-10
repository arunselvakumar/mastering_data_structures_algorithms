/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let outputString = '';

  for (let i = 0; i < command.length; i++) {
    if(command.slice(i, i + 2) === '()') {
      outputString += 'o';
      i = i + 1;
    } else if(command.slice(i, i + 4) === '(al)') {
      outputString += 'al';
      i = i + 3;
    } else {
      outputString += command[i];
    }
  }
  
  return outputString;
};

console.log(interpret('G()()()()(al)'));
