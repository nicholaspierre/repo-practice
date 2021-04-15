// Number 5 on homework
function findArg(...arg) {
    return arg.length;
}

// ---------------------------------------------------------
//Number 6 Decrementing
let output = "";
function reverseString(y) {
    for (let i = (y.length - 1); i >= 0; i--) {
        output += y[i]
    }
    return output;
}


//Number 7
function findLongestWord(WordsArray) {
    let maxLength = 0;
    for (let i = 0; i < WordsArray.length; i++) {
        if (WordsArray[i].length > maxLength) {
            maxLength = WordsArray[i].length
        }
    }
    return maxLength
}


//Number 8


function filterLongWord(wordsArray, iNum) {

    // let word1 = ["time", "money", "opportunity", "stability"]
    wordsLonger = []
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > iNum) {
            wordsLonger.push(wordsArray[i])
        }
    }
    return wordsLonger
}