/* 
The Kata will ask users to write a function that finds the number of days between two inputted dates.
NOTES:
- It should not matter which order the dates are inputted in
- If the inputted date is not valid, the function should return 'please input a date in the form yyyy-mm-dd'
- If a date is entered in a valid form (yyyy-mm-dd), the number of days and the month will be valid (e.g. the 31st of Feburary would not be inputted)
- The new Date() function is specific to the millisecond so a conversion must be done to get the answer in days
- The end date should not be included (e.g. there is 1 day between the 1st and the 3nd of January)
*/

//👉 Write the function your CodeWarriors will start with below here:

function daysBetween(dateStr1, dateStr2) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const millisecInOneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

if (dateRegex.test(dateStr1) && dateRegex.test(dateStr2)) {
  const firstDate = new Date(dateStr1);
  const secondDate = new Date(dateStr2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / millisecInOneDay));

  return `The number of days between the two dates is ${diffDays}`;
}
else {
    return `The inputted dates should be in the form 'yyyy-mm-dd`;
}
}

module.exports = {daysBetween}
