function printMessage() {
    return "My first function";
}

function findSum() {
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

console.log(argus(1,2,3,4));

function reverseString(UsrString) {
    tmpString = UsrString.split("").reverse("").join("")
    return tmpString
}

console.log(reverseString("Nicholas"))

function findLongestWord() {
    
}