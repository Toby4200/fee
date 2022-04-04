// toDo -> to implement fast sort
// function sortArray() {
// }

function binarySearch(sortedArray, searchedItem) {
  let firstIndex = 0;
  let lastIndex = sortedArray.length - 1;

  // while 
  do {
    let midItemIndex = Math.ceil((firstIndex + lastIndex) / 2);
    let midItem = sortedArray[midItemIndex];

    console.log('midItem', midItem)

    if (midItem === searchedItem) {
      return midItemIndex;
    }

    if (midItem > searchedItem) {
      lastIndex = midItemIndex - 1;
    } else {
      firstIndex = midItemIndex + 1;
    }
  } while (firstIndex <= lastIndex)
}

const res = binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13], 7);
console.log('res', res);

console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13], 6));