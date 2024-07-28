// algorithms.ts
export const selectionSort = async (
    array: number[],
    onSwap: (array: number[]) => void
  ): Promise<void> => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap the found minimum element with the first element
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        onSwap([...array]);
        await new Promise((resolve) => setTimeout(resolve, 50)); // delay for visualization
      }
    }
  };
  