import fs from 'fs/promises';
import { superFloatParser } from './parser.js';

/**
 *
 * @param {string} filename
 * @returns
 */
export async function readNumberFile(filename) {
  const numbers = [];
  var fileContents;
  try {
    fileContents = await fs.readFile(filename, 'utf-8');
  } catch (err) {
    throw new Error(err);
  }
  fileContents.split('\n').forEach((line) => {
    var parsedNumber = superFloatParser(line);
    if (!Number.isNaN(parsedNumber)) {
      numbers.push(parsedNumber);
    }
  });
  return numbers;
}
