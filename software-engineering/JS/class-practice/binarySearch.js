// Work In Progress...

function binarySearch() {
    let numArray = [21, 22, 25, 27, 30, 35, 40, 48, 50]
    let data = 30;
    let start = 0;
    let end = (numArray.length - 1)

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
    }
    if (numArray[middle] == data) {
        return numArray[middle]
    }
    if (numArray[middle] > data) {
        // Search the left side of numArray
    }
}