isFound = false;
let dataLookingFor = 11

givenArray = [5, 10, 2, 100, 20, 1]

for (let num = 0; num < givenArray.length; num++) {
    if (givenArray[num] == dataLookingFor) {
        isFound = true;
        document.getElementById("para1").innerHTML = "Number " + dataLookingFor + " is found in location: " + (num + 1)
        break;
    }
    document.getElementById("para1").innerHTML = "Number " + dataLookingFor + " is NOT found"
}
