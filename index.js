const resolver = (array, number) => {
    for (x = 0; x < array.length; x++) {
        for (y = x + 1; y < array.length; y++) {
            if (array[x] + array[y] === number) return true
        }
    }
    return false
}

resolver([1, 3, 9, 4], 8)
resolver([1, 2, 4, 4], 8)

const resolver = (array, result) => {
    const results = {}
    for (const number of array) {
        if (results[number]) return true
        results[result - number] = true
    }
    return false
}

resolver([1, 3, 9, 4], 8)
resolver([1, 2, 4, 6], 8)
