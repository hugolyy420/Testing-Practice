export const calculator = {
  add(a, b) {
    if (a === undefined || b === undefined) throw new Error('Empty input');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input is not a number');
    const num = a + b;
    return Number(num.toFixed(2));
  },
  subtract(a, b) {
    if (a === undefined || b === undefined) throw new Error('Empty input');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input is not a number');
    const num = a - b;
    return Number(num.toFixed(2));
  },
  multiply(a, b) {
    if (a === undefined || b === undefined) throw new Error('Empty input');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input is not a number');
    const num = a * b;
    return Number(num.toFixed(2));
  },
  divide(a, b) {
    if (a === undefined || b === undefined) throw new Error('Empty input');
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input is not a number');
    const num = a / b;
    return Number(num.toFixed(2));
  },
};
