const selectionSort = (numArray) => {
    for (i = 0; i < numArray.length - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < numArray.length; j++) {
            if (numArray[j] < numArray[minIndex]) {
                minIndex = j;
            }
        };
        swapArray(numArray, i, minIndex);
    };
    return numArray;
};

const swapArray = (numArray, i, minIndex) => {
    return [numArray[i], numArray[minIndex]] = [numArray[minIndex], numArray[i]];
}