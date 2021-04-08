var sentence = "Visit Microsoft its an awesome place. Microsoft has lots of Tech"
var newSentence = sentence.replace(/Microsoft/g, "Per Scholas")
var sentenceLength = (newSentence.length + 6)

console.log(newSentence)
console.log(newSentence.endsWith("Tech"))
console.log(newSentence.startsWith("Visit"))
console.log(newSentence.includes("park"))
console.log(sentenceLength)
console.log(newSentence.padStart(sentenceLength, " "))
console.log(newSentence.padStart(sentenceLength, " ").trim())
