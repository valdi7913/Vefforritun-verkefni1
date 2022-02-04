import * as ss from 'simple-statistics';

/**
 * Parse number
 * @param {int[]} number list containing numbers
 * @returns
 */
export function calculateStats(numbers) {
  if (numbers.length == 0) {
    return undefined;
  }
  const max = ss.max(numbers);
  const min = ss.min(numbers);
  const mean = ss.mean(numbers);
  const median = ss.median(numbers);
  const stdev = ss.standardDeviation(numbers);
  const range = max - min;
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
