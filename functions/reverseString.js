export default function reverseString(str) {
  if (str === undefined) return '';
  if (typeof str === 'number') return str;
  return str.split('').reverse().join('');
}
