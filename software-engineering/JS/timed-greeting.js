
var date = new Date();
var dateHours = date.getHours();
var dateMinutes = date.getMinutes();
var dateSeconds = date.getSeconds();

if (dateHours < 12) {
    console.log("Good Morning");
} else if (dateHours >= 12 && dateHours < 16) {
    console.log("Good Afternoon");
} else {
    console.log("Hello, How are you");
}
