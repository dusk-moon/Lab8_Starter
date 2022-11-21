// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('123-4567890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('123-4567890')).toBe(true);
});
test('123456 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('123456')).toBe(false);
});
test('abcde is not a valid phone number', () => {
    expect(functions.isPhoneNumber('abcde')).toBe(false);
});


test('hefeng@ucsd.edu is a valid email address', () => {
    expect(functions.isEmail('hefeng@ucsd.edu')).toBe(true);
});
test('abc@abc.ab is a valid email address', () => {
    expect(functions.isEmail('abc@abc.ab')).toBe(true);
});
test('abc.abc.ab is not a valid email address', () => {
    expect(functions.isEmail('abc.abc.ab')).toBe(false);
});
test('abcde is not a valid email address', () => {
    expect(functions.isEmail('abcde')).toBe(false);
});


test('a12345678 is a valid strong password', () => {
    expect(functions.isStrongPassword('a12345678')).toBe(true);
});
test('VZB_345_ab46 is a valid strong password', () => {
    expect(functions.isStrongPassword('VZB_345_ab46')).toBe(true);
});
test('123 is not a valid strong password', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
test('a123123123131231232131312312321 is not a valid strong password', () => {
    expect(functions.isStrongPassword('a123123123131231232131312312321')).toBe(false);
});


test('12/12/1212 is a valid date', () => {
    expect(functions.isDate('12/12/1212')).toBe(true);
});
test('1/1/1111 is a valid date', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});
test('12121212 is not a valid date', () => {
    expect(functions.isDate('12121212')).toBe(false);
});
test('12/12/12 is not a valid date', () => {
    expect(functions.isDate('12/12/12')).toBe(false);
});


test('#123 is a valid HexColor', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});
test('#FFFFFF is a valid HexColor', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('GGG is not a valid HexColor', () => {
    expect(functions.isHexColor('GGG')).toBe(false);
});
test('#1234 is not a valid HexColor', () => {
    expect(functions.isHexColor('#1234')).toBe(false);
});