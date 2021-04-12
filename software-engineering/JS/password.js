var special = "!?*_$%&#@"
var hasspecialchar = 0
var hasCapital = 0
var hasNumber = 0
var password = "lkasklsaj!@"
var message = ""

console.log(password)

var x = 0;
for (x = 0; x < password.length; x++) {
    if (password[x] == password[x].toUpperCase() && special.includes(password[x]) == false && Number(password[x] >= 0) == false) {
        console.log(password[x] == password[x].toUpperCase())
        hasCapital += 1
    }

    if (Number(password[x]) >= 0) {
        hasNumber += 1
    }
    if (special.includes(password[x])) {
        hasspecialchar += 1


    } if (password.length < 6) {
        message = "must be at least 6 characters"
    }

    else if (password.length > 5) {
        if (hasNumber == 0) {
            message = "must include at least 1 number"
        }
        else if (hasCapital == 0) {
            message = "must include at least 1 uppercase letter"
        }
        else if (hasspecialchar == 0) {
            message = "must include at least 1 special character"
        }
        else {
            message = "success"
        }
    }
}
console.log("kevin".length)
console.log(message)