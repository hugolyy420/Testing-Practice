import reverseString from '../functions/reverseString';

test('Reverse string of one word', () => {
  expect(reverseString('Hugo')).toBe('oguH');
});

test('Reverse string of more than one word', () => {
  expect(reverseString('I am happy')).toBe('yppah ma I');
});

test('Return empty string if no input', () => {
  expect(reverseString()).toBe('');
});
