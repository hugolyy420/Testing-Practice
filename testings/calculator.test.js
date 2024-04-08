import { calculator } from '../functions/calculator';

test('Add two single digit numbers', () => {
  expect(calculator.add(7, 9)).toBe(16);
});

test('Add two negative numbers', () => {
  expect(calculator.add(-89, -788)).toBe(-877);
});

test('Correct to two decimial places', () => {
  expect(calculator.add(13.53546, 564.3435)).toBe(577.88);
});

test('Subtract two fraction numbers', () => {
  expect(calculator.subtract(3 / 8, 9 / 6)).toBe(-1.13);
});

test('Multiply two floating numbers', () => {
  expect(calculator.multiply(9.78, 18.23)).toBe(178.29);
});

test('Divide two floating numbers', () => {
  expect(calculator.divide(0.2, 1.5)).toBe(0.13);
});

test('Throw error if at least one of the input is not a number', () => {
  expect(() => calculator.add('35', 2)).toThrow('Input is not a number');
});

test('Throw error if at least one of the input is undefined', () => {
  expect(() => calculator.multiply()).toThrow('Empty input');
});
