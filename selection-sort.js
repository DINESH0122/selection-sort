function selectionSort(arr) {
    const n = arr.length;
    
    // Traverse through the entire array
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i; // Assume the current element is the minimum
    
      // Find the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
    
      // Swap the minimum element with the first element in the unsorted part
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    
    return arr;
  }
  
  // Example usage:
  const array = [64, 25, 12, 22, 11];
  console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]
  