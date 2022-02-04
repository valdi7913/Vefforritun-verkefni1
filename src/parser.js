/**
 * @param {string} line
 * @return {number}
 */
export function superFloatParser(string) {
  //if string contains no numbers return NaN
  if (!string.match(/[0-9]/)) {
    return NaN;
  }
  const nDots = (string.match(/\./g) || []).length;
  string = string.split('#')[0];
  if (nDots > 1 || (nDots == 1 && string.includes(','))) {
    string = string.replace('.', '');
  }
  if (string.includes(',')) {
    string = string.replace(',', '.');
  }
  const parsed = Number(string);
  return parseFloat(parsed);
}
