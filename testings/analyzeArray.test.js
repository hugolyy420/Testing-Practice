import analyzeArray from '../functions/analyzeArray';

test('Return object with data', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('Return object with data with negative value', () => {
  expect(analyzeArray([1, -2, 3, -100, 15])).toEqual({
    average: -17,
    min: -100,
    max: 15,
    length: 5,
  });
});

test('Return object with data with floating numbers', () => {
  expect(analyzeArray([1, -2, 15.32, -10, 15, 18.3])).toEqual({
    average: 6,
    min: -10,
    max: 18.3,
    length: 6,
  });
});

test('Empty slot in array', () => {
  expect(() => analyzeArray([1, , -1, 10, 5])).toThrow(
    'Array contains empty slot'
  );
});

test('Non-number in array', () => {
  expect(() => analyzeArray(['1', 2, 3, 4, 5])).toThrow(
    'Array contains non-number'
  );
});

test('Not an array', () => {
  expect(() => analyzeArray('not an array')).toThrow('Not an array');
});

test('Empty array', () => {
  expect(() => analyzeArray([])).toThrow('Array is empty');
});
