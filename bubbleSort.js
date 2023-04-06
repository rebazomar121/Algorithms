const array = [3, 4, 2, 5, 6, 8, 1, 6]
// Bubble Sort
/**
 * Sorts an array in ascending order using Bubble Sort algorithm.
 *
 * @param {Array} list - The array to be sorted.
 * @returns {Array} - The sorted array in ascending order.
 */
function bubbleSort(list) {
  let length = list.length
  for (var i = length; i > 0; i--) {
    for (var j = length; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        let tmp = list[j]
        list[j] = list[j - 1]
        list[j - 1] = tmp
      }
    }
  }
  return list
}

bubbleSort(array)
