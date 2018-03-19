const animals = [
    {
        "name": "hedgehog",
        "size": "small",
        "weight": 500
    },
    {
        "name": "meercat",
        "size": "small",
        "weight": 730
    },
    {
        "name": "capricorn",
        "size": "medium",
        "weight": 1000
    },
    {
        "name": "mammoth",
        "size": "big",
        "weight": 8000
    }
]

//1.1 Create a new array animalNames, using a for-loop that contains the names of all the animals.
let animalNames = [];
for (let i in animals) {
    animalNames.push(animals[i].name);
}
console.log(animalNames);


//1.2 Now create another array do the same only using map.


let animalNamesTwo = [];
animalNamesTwo = animals.map(function (i) {
    i = i.name;
    return i;

});
console.log(animalNamesTwo);


//1.3 Create an array smallAnimals that only contains the animals which are small, using a for-loop
let smallAnimals = [];
for (let x in animals) {
    if (animals[x].size === "small") {
        smallAnimals.push(animals[x].name);
    }
}
console.log(smallAnimals);
//1.4 Now do the same only use the filter() method to achieve this.
let smallAnimalsTwo = [];
smallAnimalsTwo = animals.filter(function (x) {
    return (x.size === "small");
});

console.log(smallAnimalsTwo);

//Implement a function that adds two binary numbers together(in string representation)
//and outputs the sum of these bumpers as a binary string for example:

//addBinary('00101101', '01001110'); //should output the sum of the two given binary numbers

/*let a = '00101101'
let b = '01001110'

function addBinary(a, b) {
    const sum = xor(a, b);
    const carry = and(a, b);
    return [sum, carry];
}

console.log(addBinary);/*

// I tried adding the two numbers, but the more I tried, the more difficult it got;