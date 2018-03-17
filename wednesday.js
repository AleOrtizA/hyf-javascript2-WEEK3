//0. We learned a little bit about callbacks in JS. 
//A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed. 
//There is another function called setTimeout that will wait a specified period of time and then execute a function. 
//For example:
    function doIt() {
        console.log('I am done');
    }
    setTimeout(doIt, 15000)
//Step 1, we saw that we can pass functions as arguments to other functions. 
//Your task is to write a function that takes another function as an argument and runs it.
    function globalFunction(func) {
        return func;
    }
    
    function localFunction() {
    console.log('Hello, I am a very important function!');
    }

    globalFunction(localFunction());
//2. You must write a function that takes 4 arguments. - A start value - An end value - A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5
//The function should generate an array containing values from start value to end value (inclusive).
//Then the function should iterate over the array and call the first callback if the array value is divisible by 3
//The function should call the second callback if the array value is divisible by 5
//Both functions should be called if the array value is divisible by both 3 and 5

//THIS IS FAKE CODE 
//function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
//}
//threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding

