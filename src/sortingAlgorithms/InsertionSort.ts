// algorithms.ts
export const insertionSort = async (
    array: number[],
    onSwap: (array: number[]) => void
  ): Promise<void> => {
    const n = array.length;
    for (let i = 1; i < n; i++) {
      const key = array[i];
      let j = i - 1;
  
      // Move elements of array[0..i-1], that are greater than key, to one position ahead
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
        onSwap([...array]);
        await new Promise((resolve) => setTimeout(resolve, 50)); // delay for visualization
      }
      array[j + 1] = key;
      onSwap([...array]);
      await new Promise((resolve) => setTimeout(resolve, 50)); // delay for visualization
    }
  };
  