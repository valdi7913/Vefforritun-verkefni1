import fs from 'fs/promises';
import * as ss from 'simple-statistics';
/**
 *
 * @param {string} filename
 * @returns
 */
export async function readNumberFile(filename) {
  const numbers = [];
  var fileContents;
  try{
     fileContents = await fs.readFile(filename, 'utf-8');
  }
  catch(err){
    throw new Error(err);
  }
  fileContents.split('\n').forEach((line) => {
    var parsedNumber = superFloatParser(line);
    if (!Number.isNaN(parsedNumber)) {numbers.push(parsedNumber);}
  });
  return numbers;
}
 
/**
  * @param {string} line
  * @return {number}
 */
export function superFloatParser(string) {
  //if string contains no numbers return NaN
  if (!string.match(/[0-9]/)) {return NaN;}
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

/**
 * Parse number
 * @param {int[]} number list containing numbers
 * @returns
 */
export function parseData(numbers) {

  if (numbers.length == 0) {return undefined;}
  const max = ss.max(numbers);
  const min = ss.min(numbers);
  const mean =  ss.mean(numbers);
  const median = ss.median(numbers);
  const stdev = ss.standardDeviation(numbers);
  const range = (max - min);
  const sum = ss.sum(numbers, 0);
  const variance = ss.variance(numbers);

  return {
      Max: max.toFixed(2),
      Min: min.toFixed(2),
      Mean: mean.toFixed(2),
      Median: median.toFixed(2),
      Stdev: stdev.toFixed(2),
      Sum: sum.toFixed(2),
      Range: range.toFixed(2),
      Variance: variance.toFixed(2),
    };
}
