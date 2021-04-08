isPrime = false;

for (let num = 2; num <= 100; num++) {

    for (let numCount = num; numCount <= 10; numCount++) {
        if (num % numCount == 0) {
            console.log("numCount:" + numCount + " and num:" + num)
        }
    }
}
