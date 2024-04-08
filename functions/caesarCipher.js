export default function caesarCipher(str, shift) {
  if (typeof str !== 'string') throw new Error('Not a string');
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}
