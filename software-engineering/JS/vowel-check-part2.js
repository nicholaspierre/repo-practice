sentence = "How are you doing today?";
sentenceLength = sentence.length;
var eachChar
var vowelCount = 0

for (sentenceLength; sentenceLength >= 0; sentenceLength--) {
    eachChar = sentence.slice((sentenceLength - 1), sentenceLength)
    if (eachChar == 'a' || eachChar == 'e' || eachChar == 'i' || eachChar == 'o' || eachChar == 'u') {
        vowelCount += 1;
    }

}
console.log(sentence);
console.log("This sentence has a vowelCount " + vowelCount);
