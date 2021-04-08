
let givenWord = "smith";
let wordLength = (givenWord.length - 1);
let wordBackwards = ""


for (wordLength; wordLength >= 0; wordLength--) {
    wordBackwards += givenWord.charAt(wordLength)
    console.log(wordBackwards)
}

if (givenWord == wordBackwards) {
    console.log(givenWord + " IS a palindrome")
} else {
    console.log(givenWord + " is NOT a palindrome")
}
