let student =
{
    fname: "John", lname: "Smith", maths: 81, english: 75, compsci: 82, age: 35, result: 35,
    calcAvg: function () {
        this.result = (Math.floor((this.maths + this.english + this.compsci) / 3))
        return (Math.floor((this.maths + this.english + this.compsci) / 3))
    }
}