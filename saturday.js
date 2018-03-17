//Write a function that would allow you to do this:
//let addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27

function makeAdder(x) {
    return function(num) {
        return x + num;
    };
}
let addSix = makeAdder(6);

console.log(addSix(10)); //returns 16
console.log(addSix(21)); //returns 27
  

//Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] 
//and returns an array which only has unique values in it (so it removes the duplicate ones). 
//Make it a 'smart' algorithm that could do it for every array (only strings/number). 
//Try to make it as fast as possible!

let oldArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'j', 'h', 'kk', 'pzc', 'aa', 'e', 'b', 'bb'];
let uniqueArray = Array.from(new Set(oldArray));

console.log(uniqueArray);