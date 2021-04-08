/*
------> FOR LOOP

let startValue = 33;
let endValue = 55;


for (let counter = startValue; counter <= endValue; counter++) {
    if (counter % 2 == 0) {
        console.log(counter)
    }
}
*/

let startValue = 33;
let endValue = 55;

let counter = startValue
while (counter <= endValue) {
    if (counter % 2 == 0) {
        console.log(counter)
    }
    counter++
}