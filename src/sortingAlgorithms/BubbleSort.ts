// algorithms.ts
export const bubbleSort = async (
  array: number[],
  onSwap: (array: number[]) => void
): Promise<void> => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        onSwap([...array]);
        await new Promise((resolve) => setTimeout(resolve, 50)); // delay for visualization
      }
    }
  }
};
