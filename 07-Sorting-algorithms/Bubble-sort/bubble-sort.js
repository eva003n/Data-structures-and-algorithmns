function bubbleSort(arr, n) {
    // pass left to right (array size bounded)
    for(let pass = 0; pass < n - 1; pass++) {
        // with each pass access and compare adjacent elements(using comparison operator)
        for(let i = 0; i < n ; i++) {
            const j = i + 1 // adjacency(problem we are accessing outside memory)
            // current element is greater than the next
            if(arr[i] > arr[j]) {
                // swap
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }

    }
    return arr
}

let arr = [100, 20, 340, 4, 700, 1];
arr = bubbleSort(arr, arr.length)
console.log(arr)