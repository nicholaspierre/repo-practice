// numMonth 1-12 Values
// monthName = Name of Month
var numMonth = 8;
var monthName;
// numDay 1-7 Values
// dayName = Name of Day
var numDay = 1;
var dayName;

if (numMonth == 1) {
    monthName = "January"
} else if (numMonth == 2) {
    monthName = "Febuary"
} else if (numMonth == 3) {
    monthName = "March"
} else if (numMonth == 4) {
    monthName = "April"
} else if (numMonth == 5) {
    monthName = "May"
} else if (numMonth == 6) {
    monthName = "June"
} else if (numMonth == 7) {
    monthName = "July"
} else if (numMonth == 8) {
    monthName = "August"
} else if (numMonth == 9) {
    monthName = "September"
} else if (numMonth == 10) {
    monthName = "October"
} else if (numMonth == 11) {
    monthName = "November"
} else if (numMonth == 12) {
    monthName = "December"
} else {
    monthName = "Invalid Number for Month"
}


if (numDay == 1) {
    dayName = "Sunday"
} else if (numDay == 2) {
    dayName = "Monday"
} else if (numDay == 3) {
    dayName = "Tuesday"
} else if (numDay == 4) {
    dayName = "Wednesday"
} else if (numDay == 5) {
    dayName = "Thursday"
} else if (numDay == 6) {
    dayName = "Friday"
} else if (numDay == 7) {
    dayName = "Saturday"
} else {
    dayName = "Invalid Number for Day"
}

console.log(monthName)
console.log(dayName)