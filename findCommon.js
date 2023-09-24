/**
 * Javascript program to find common elements in three sorted arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
function findCommon(arr1, arr2, arr3) {
  /**
   * Output
   * @type {number[]}
   */
  const output = [];

  const n1 = arr1.length;
  const n2 = arr2.length;
  const n3 = arr3.length;

  /**
   * Indexes
   */

  let i = 0;
  let j = 0;
  let k = 0;

  // declare cycles
  let cycles = 0;

  while (i < n1 && j < n2 && k < n3) {
    const x = arr1[i], y = arr2[j], z = arr3[k];

    if (x === y && y === z) {
      output.push(arr1[i]);
      // update indexes
      i += 1;
      j += 1;
      k += 1;
    }
    // x < y
    else if (x < y) i += 1;
    // y < z
    else if (y < z) j += 1;
    // x > y > z
    else k += 1;
    // update cycle
    cycles += 1;
  }

  return output;
}
