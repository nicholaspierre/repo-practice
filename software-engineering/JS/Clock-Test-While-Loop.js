
let startValue = 1;
let endValue = 1000000;


let counter = startValue;

while (counter <= endValue) {

    let currentDateAndTime = new Date();
    let dateHours = currentDateAndTime.getHours();
    let dateMinutes = currentDateAndTime.getMinutes();
    let dateSeconds = currentDateAndTime.getSeconds();

    console.log(dateHours + ":" + dateMinutes + ":" + dateSeconds)
    counter++
}