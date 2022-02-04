import { describe, test, expect, it } from '@jest/globals';
import { readNumberFile } from '../reader';
import { superFloatParser } from '../parser';
import { calculateStats } from '../calculator';

describe('parser', () => {
  it('superFloatParser symbols and comment', () => {
    const input = '100.100,0#test';
    const parsed = superFloatParser(input);
    const expected = 100100.0;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser separator without decimals', () => {
    const input = '100.100';
    const parsed = superFloatParser(input);
    const expected = 100.1;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser separator with decimals', () => {
    const input = '123.456,789';
    const parsed = superFloatParser(input);
    const expected = 123456.789;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser invalid input', () => {
    const input = 'aaaa100';
    const parsed = superFloatParser(input);
    const expected = NaN;

    expect(parsed).toBe(expected);

    const input2 = '100aaa';
    const parsed2 = superFloatParser(input2);
    const expected2 = NaN;

    expect(parsed2).toBe(expected2);
  });

  it('superFloatParser just a comment', () => {
    const input = '# this is a comment';
    const parsed = superFloatParser(input);
    const expected = NaN;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser empty', () => {
    const input = '';
    const parsed = superFloatParser(input);
    const expected = NaN;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser scientific numbers', () => {
    const input = '1e10';
    const parsed = superFloatParser(input);
    const expected = 10000000000;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser scientific numbers with dot', () => {
    const input = '6.5e4';
    const parsed = superFloatParser(input);
    const expected = 65000;

    expect(parsed).toBe(expected);
  });

  it('superFloatParser scientific numbers with comma', () => {
    const input = '6,5e4';
    const parsed = superFloatParser(input);
    const expected = 65000;
    expect(parsed).toBe(expected);
  });
});
describe('calculateStats', () => {
  it('calculateStats, valid data', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const parsed = calculateStats(numbers);
    const expected = {
      Max: '10.00',
      Min: '1.00',
      Mean: '5.50',
      Median: '5.50',
      Stdev: '2.87',
      Sum: '55.00',
      Range: '9.00',
      Variance: '8.25',
    };
    expect(parsed).toEqual(expected);
  });

  it('calculateStats, no data', () => {
    const numbers = [];
    const parsed = calculateStats(numbers);
    const expected = undefined;
    expect(parsed).toEqual(expected);
  });
});

describe('readNumberFile', () => {
  test('readNumberFile, valid data', async () => {
    const file = 'src/test/testcase/test.txt';
    const expected = [1, 2, 3, 4, 5];
    await expect(readNumberFile(file)).resolves.toStrictEqual(expected);
  });

  test('readNumnberFile, invalid data', async () => {
    const file = 'src/test/testcase/fails.txt';
    await expect(readNumberFile(file)).rejects.toThrow();
  });
});
