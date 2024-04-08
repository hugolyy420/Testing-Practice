export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new Error('Not an array');
  if (arr.length === 0) throw new Error('Array is empty');
  if (arr.some((item) => typeof item !== 'number'))
    throw new Error('Array contains non-number');
  if (arr.includes(undefined)) throw new Error('Array contains empty slot');
  const object = {};
  const sum = arr.reduce((acu, cur) => acu + cur);
  const average = Math.round(sum / arr.length);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}
