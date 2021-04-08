
let givenName = "Nicholas Pierre";
let givenAddress = "123 Prospect Avenue";
let nameLength = (givenName.length - 1);
let nameBackwards

console.log(nameLength)

for (nameLength; nameLength >= 0; nameLength--) {
    console.log(givenName.charAt(nameLength) + " position:" + (nameLength))
    nameBackwards += givenName.charAt(nameLength)
}

console.log(nameBackwards)

// Converts to Upper Case
console.log(givenName.toUpperCase());
// Converts to Lower Case
console.log(givenName.toLowerCase());
// Converts entire string to Upper Case
console.log("Hello My Name is: ".concat(givenName).toUpperCase())
console.log("The Index Of the Letter 'N' is " + givenName.indexOf('N'))
console.log("givenAddress = " + givenAddress)
console.log("The Index Of the Number '3' is " + givenAddress.indexOf(3))
console.log("The Last Index Of the 'e' is " + givenAddress.lastIndexOf('e'))
