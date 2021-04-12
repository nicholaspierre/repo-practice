let rowMax = 10;

// First Program
for (let row = 1; row <= rowMax; row++) {

    for (let colRow = 1; colRow <= row; colRow++) {
//        process.stdout.write(row + "")
        process.stdout.write("#")

}
    console.log("")
}

// Second Program

for (let col = 10; col >= 1; col--) {
    for (row = 1; row <= col; row++) {
//        process.stdout.write(row + "");
        process.stdout.write("#");

}
    console.log("")
}
