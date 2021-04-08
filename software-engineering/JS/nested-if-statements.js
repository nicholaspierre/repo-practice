// "Ask your parents" - 0 - 12
// "Teenager" 13 - 18
    // Adult 19-64 "Adult"
    // Senior 65+ "Adult Senior"

var ageNum = 12;

if (ageNum >= 0 && ageNum <= 12) {
    console.log("As your parents")
} else if (ageNum >= 13 && ageNum <= 18) {
    console.log("ageNum is a Teenager");
} else if (ageNum >= 19) {
    if (ageNum >= 65) {
        console.log("ageNum is an Adult Senior")
    } else if (ageNum < 65) {
        console.log("ageNum is an Adult")
    }
}