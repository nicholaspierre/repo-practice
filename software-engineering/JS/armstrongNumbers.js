
let givenNum = 153;
let quotantNumber = givenNum;
let sum = 0;

while (quotantNumber != 0) {
    let remainderNumber = quotantNumber % 10;
    quotantNumber = Math.floor(quotantNumber / 10)
    sum += (remainderNumber * remainderNumber * remainderNumber);
}

if (sum == givenNum) {
    console.log(givenNum + " it is an armstrong number")
} else {
    console.log(givenNum + " sorry, is NOT an armstrong number")
}
