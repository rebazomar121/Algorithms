const array = [3, 4, 2, 5, 6, 8, 1, 6]
// Selection Sort
function selectionSort(list) {
  let length = list.length
  for (var i = 0; i < length; i++) {
    var smallest = i
    for (var j = i+1; j < length; j++) {
      if (list[smallest] > list[j]) {
        smallest = j
      }
    }
    let tmp = list[i]
    list[i] = list[smallest]
    list[smallest] = tmp
  }
  return list
}
console.log(selectionSort(array))
