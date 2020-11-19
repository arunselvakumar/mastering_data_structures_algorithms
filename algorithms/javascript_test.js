console.log('Hello World');

var testFunction = () => {

  const testArray = [1,2,3,4,5,6,7];

  /*
  for (let i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
    if(testArray[i] === 5) {
      return;
    }
  }
   */

  testArray.forEach(item => {
    console.log(item);
    if(item === 5) {

    }
  })


  console.log('Hello');
}

testFunction();
