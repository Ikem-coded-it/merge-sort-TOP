/**
* Recursive function that sorts arrays using merge sort algorithm
*/

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const leftHalf = arr.slice(0, Math.floor(arr.length / 2))
    const rightHalf = arr.slice(Math.floor(arr.length / 2), arr.length)
    
    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

const merge = (left, right, leftLength = left.length, rightLength = right.length) => {
    let merged = []
    let leftStartingIndex = 0
    let rightStartingIndex = 0
    let mergedStartingIndex = 0

    while (leftStartingIndex < leftLength && rightStartingIndex < rightLength) {
        if (left[leftStartingIndex] < right[rightStartingIndex]) {
            merged.push(left[leftStartingIndex])
            leftStartingIndex++
            mergedStartingIndex++
        } else {
            merged.push(right[rightStartingIndex])
            rightStartingIndex++
            mergedStartingIndex++
        }
    }

    for (let i = leftStartingIndex; i < leftLength; i++) {
        merged.push(left[i])
    }

    for (let i = rightStartingIndex; i < rightLength; i++) {
        merged.push(right[i])
    }

    return merged;
}

console.log(mergeSort([1,5,3,2,5]))