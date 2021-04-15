num = [400, 3, 0, -7, -1, 1000]
n = num.length - 1

for (i = n; i >= 1; i--) {
    for (j = 0; j < i; j++) {
        if (num[j] > num[j + 1]) {
            temp = num[j];
            num[j] = num[j + 1]
            num[j + 1] = temp
        }
    }
}
console.log(num);