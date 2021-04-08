var passWord = " alaala"
var newPassWord = passWord.replace(/a/g, "@")
var passWordLength = (passWord.length)
var passwordMessage = ""
console.log("original password: " + passWord)
if (passWordLength <= 7) {
    passwordMessage = "password is less than 8 characters long"
}

if (passWord.includes("@")) {
    console.log("password contains special characters which makes it more secure")
}

if (passWord.includes(" ")) {
    console.log("spaces cannot be used in password")
}

console.log("original password length: " + passWordLength + " " + passwordMessage)
// console.log(newSentence.endsWith("Tech"))
// console.log(newSentence.startsWith("Visit"))
// console.log(newSentence.includes("park"))
// console.log(sentenceLength)
// console.log(newSentence.padStart(sentenceLength, " "))
// console.log(newSentence.padStart(sentenceLength, " ").trim())
