let previous = 0, current = 1, answer;

console.log(previous);
console.log(current);

for (let num = 1; num <= 10; num++) {

    answer = previous + current;
    console.log(answer);
    previous = current;
    current = answer;
}
