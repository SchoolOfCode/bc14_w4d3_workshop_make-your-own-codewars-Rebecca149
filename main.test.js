//👉 Write your tests below here:

/* SOME TEST SCENARIOS:

1. Does the function work when two valid dates are iputted? ✅
2. Does it work whe first date is before the second AND when it is after? ✅
3. When there are no days between ✅
4. When there is one day between ✅
6. When the first, second or both of the input dates are invalid ✅

*/

/* SKELETON TEST:

test('', function () {
    const actual =
    const expected = 
    expect(actual).toBe(expected);
});

*/

const { daysBetween } = require("./main.js");

test('Returns the correct number of days between the two inputted dates', function () {
    const actual = daysBetween('2022-04-25', '2023-04-25')
    const expected = `The number of days between the two dates is 365`
    expect(actual).toBe(expected);
});

test('The first date is after the second date', function () {
    const actual = daysBetween('1984-02-03', '1965-12-27')
    const expected = `The number of days between the two dates is 6612`
    expect(actual).toBe(expected);
});

test('There are no days between the two dates', function () {
    const actual = daysBetween('1675-12-25', '1675-12-25')
    const expected = `The number of days between the two dates is 0`
    expect(actual).toBe(expected);
});

test('There are no days between the two dates', function () {
    const actual = daysBetween('0214-06-17', '0214-06-18')
    const expected = `The number of days between the two dates is 1`
    expect(actual).toBe(expected);
});

test('Both dates are invalid', function () {
    const actual = daysBetween('hello', 'world')
    const expected = `The inputted dates should be in the form 'yyyy-mm-dd`
    expect(actual).toBe(expected);
});

test('dateStr1 is invalid', function () {
    const actual = daysBetween('hello', '2000-03-10')
    const expected = `The inputted dates should be in the form 'yyyy-mm-dd`
    expect(actual).toBe(expected);
});

test('dateStr1 is invalid', function () {
    const actual = daysBetween('2000-03-10', 'hello')
    const expected = `The inputted dates should be in the form 'yyyy-mm-dd`
    expect(actual).toBe(expected);
});