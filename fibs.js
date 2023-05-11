/**
 * Fibonacci using for loop
 */
function fibs(n) {
    let sequence = [0, 1]
    for (let i = 0; i <= n; i++) {
        let prevValue = sequence[sequence.length - 2]
        let currentValue = sequence[sequence.length - 1]
        sequence.push(prevValue + currentValue)
    }

    console.log(sequence)
}

fibs(8) // [0, 1, 1, 2, 3, 5, 8, 13]

/**
 * Fibonacci using recursion
 */

function fibsRec(n, sequence = [0, 1]) {
    if (sequence.length >= n) {
        console.log(sequence)
        return
    }
    let prevValue = sequence[sequence.length - 2]
    let currentValue = sequence[sequence.length - 1]
    sequence.push(prevValue + currentValue)
    prevValue = currentValue
    currentValue = sequence[sequence.length - 1]
    fibs(n, sequence)
}

fibsRec(8) // [0, 1, 1, 2, 3, 5, 8, 13]