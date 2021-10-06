// console.log(process.argv[2])

const fileName = process.argv[2];
const fs = require('fs');
const { createRequire } = require('module');

const bubbleSort = arr => {
  let count = 0
  for (i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1])
      count += 1
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(`Tri à bulles : ${count} comparaisons`)
}


function insertionSortIt(arr) {
  let count = 0
  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
      count += 1
    }
    arr[j + 1] = currentVal
  }
  console.log(`Tri par insertion : ${count} comparaisons`)
}
// mark first element as sorted
// for each unsorted element X
//   'extract' the element X
//   for j = lastSortedIndex down to 0
//     if current element j > X
//       move sorted element to the right by 1
//     break loop and insert X here

var counterInsert = 0

// const insertionInSortedArray = (sortedArray, number, length = sortedArray.length) => {
//   if (number < sortedArray[length - 1]) {
//     counterInsert += 1
//     return insertionInSortedArray(sortedArray, number, length - 1)
//   }
//   else {
//     sortedArray.splice(length, 0, number)
//   }
//   return sortedArray
// }

// const insertionSort = arr => {
//   let sortedArray = []
//   while (arr.length > 0) {
//     counterInsert += 1
//     insertionInSortedArray(sortedArray, arr[0])
//     arr.shift()
//   }
//   console.log(`Tri par insertion : ${counterInsert} comparaisons`)
//   return sortedArray
// }




fs.readFile(fileName, text => {
  var text = fs.readFileSync(fileName).toString('utf-8');
  let arr = text.split(' ').map(el => parseInt(el))
  // console.log(arr)
  // bubbleSort(arr)
  // insertionSortIt(arr)
  placePivot(arr)

});



// Fonction PIVOT 

const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

const placePivot = (arr, start = 0, end = arr.length - 1) => {
  console.log(arr)
  // console.log(start, end)
  // console.log(arr.slice(start, end + 1))

  let indexPivot = start
  let indexLastSmaller = indexPivot
  for (indexCurrent = indexPivot + 1; indexCurrent <= end; indexCurrent++) {
    if (arr[indexCurrent] < arr[indexPivot]) {
      swap(arr, indexLastSmaller + 1, indexCurrent)
      indexLastSmaller++
    }
  }
  swap(arr, indexPivot, indexLastSmaller)
  if (indexLastSmaller - 1 > indexPivot) {
    // console.log("gauche")
    placePivot(arr, indexPivot, indexLastSmaller - 1)
  }
  if (indexLastSmaller + 1 < end) {
    // console.log("droite")
    placePivot(arr, indexLastSmaller + 1, end)
  }
  return arr
}
