isFound = false;
let dataLookingFor = 20

givenArray = [5, 10, 2, 100, 20, 1]

for (let num = 0; num < givenArray.length; num++) {
    if (givenArray[num] == dataLookingFor) {
        isFound = true;
        console.log("Number " + dataLookingFor + " is found!" )
        break;
    }
}