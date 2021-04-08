let num1 = [9, 5, 4, 3, 2, 1, 100]
let tempNum

for (let i = 0; i <= num1.length - 2; i++) {
    for (let j = i + 1; j < num1.length; j++) {
        if (num1[i] > num1[j]) {
            tempNum = num1[i]
            num1[i] = num1[j]
            num1[j] = tempNum
        }
    }
}
console.log(num1)