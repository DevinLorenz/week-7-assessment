const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// let array = [1, 2]
//returns false

let array = [2, -2]
//returns true


const addToZero = (array) => {
    let value = false;
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {
        if (array[i] + array[j] === 0) {
            value = true;
        } 
        }
    }
    }
    console.log(value)
}

addToZero(array);




function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  
//console.log(hasUniqueChars('hello')) 
//false

console.log(hasUniqueChars('abcdef'))
//true




alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}
console.log(isPangram('This isnt a pangram'))
//returns false

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
//returns true



function findLongerWord(word1, word2) {
    if (word1.length === word2.length) {
        return 'they are the same length'
    } else if (word1.length > word2.length) {    
        return word1
    } else {
        return word2
    }
}

console.log(findLongerWord('hello', 'world'))