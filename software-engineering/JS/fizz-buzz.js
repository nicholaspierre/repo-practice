
let startValue = 1;
let endValue = 50;

/*
------> FOR LOOP

for (let counter = startValue; counter <= endValue; counter++) {
    // console.log('number is: ' + counter)
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("fizz buzz")
    } else if (counter % 3 == 0) {
        console.log("fizz")
    } else if (counter % 5 == 0) {
        console.log("buzz")
    }

}
*/

let counter = startValue;
while (counter <= endValue) {

    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("fizz buzz")
    } else if (counter % 3 == 0) {
        console.log("fizz")
    } else if (counter % 5 == 0) {
        console.log("buzz")
    }
    counter++
}