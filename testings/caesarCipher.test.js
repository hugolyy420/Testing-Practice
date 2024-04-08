import caesarCipher from '../functions/caesarCipher';

test('Shift word of lower cases', () => {
  expect(caesarCipher('test', 2)).toBe('vguv');
});

test('Shift word of both lower and upper cases', () => {
  expect(caesarCipher('uIaJ', 5)).toBe('zNfO');
});

test('Ignore punctuations', () => {
  expect(caesarCipher('I am *@Ha', 10)).toBe('S kw *@Rk');
});

test('Throw error if input is not a string', () => {
  expect(() => caesarCipher(123)).toThrow('Not a string');
});
