let num = [1,2,3,4,5]
var numSum = 0;

for (let i=1; i<=10; i++) {
    num.push(i*5)
}

for (let i = 0; i < num.length; i++) {
    numSum += num[i]
}
console.log(num)
console.log(numSum)