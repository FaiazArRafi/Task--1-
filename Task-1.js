let arr = [1, 3, 2, 7, 4, 6];
let n = arr.length;
let d = 3;


function printArray(arr, n, d) {
    let p = 1;
    while (p <= d) {
        let last = arr[0];
        for (let i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = last;
        p++;
    }

    for (let i = 0; i < n; i++) {
        console.log(arr[i] + " ");
    }
}

printArray(arr, n, d);