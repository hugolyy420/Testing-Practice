import capitalize from '../functions/capitalize';

test('Capitalize one word', () => {
  expect(capitalize('apple')).toBe('Apple');
});

test('Only capitalize first letter in a sentence', () => {
  expect(capitalize('i LOVe YoU')).toBe('I LOVe YoU');
});

test('Return original string if the first letter is capitalized already', () => {
  expect(capitalize('Happy dOG')).toBe('Happy dOG');
});

test('Return original string if first character is not a letter', () => {
  expect(capitalize('123')).toBe('123');
});

test('Return empty string if no input', () => {
  expect(capitalize()).toBe('');
});
