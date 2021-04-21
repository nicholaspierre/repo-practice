function printMessage() {
    return "My first function";
}

findSum = () => {
    return 12 + 10;
}

function maxOfTwoNumbers(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum;
     } else {
         return secondNum;
     }
}

function argus() {
    return arguments.length
}


reverseString = (UsrString) => {
    tmpString = UsrString.split("").reverse("").join("")
    return tmpString
}

console.log(reverseString("Nicholas"))

function findLongestWord() {
    
}