
export const sortArray = (arr, by = 'firstName') => {
    const swap = (index1, index2) => {
        let tempString = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tempString;
    }

    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a][by].toLowerCase() > arr[b][by].toLowerCase()) {
                swap(a, b)
            }
        }
    }

    return arr
}
