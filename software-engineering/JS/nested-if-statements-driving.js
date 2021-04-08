// Want to Learn to Drive
//  How old are you 16+ ?
//      Which License Your Getting 'Regular' or 'CDL'
//          'Regular' - You're driving a sports car aren't you ?
//          'CDL' - You're a trucker
//  You are too young to learn to drive.
// Not learning to drive "taking public transportation is for you"


var learnToDrive = true;
var ageNum = 34;
var licenseType = 'CDL'

if (learnToDrive) {
    if (ageNum >= 16) {
        if (licenseType == 'Regular') {
            console.log("You're driving a sports car aren't you ?")
        } else if (licenseType == 'CDL') {
            console.log("You're a trucker")
        }
    } else {
        console.log("You're too young to drive")
    }
} else {
    console.log("taking public transportation is for you")
}