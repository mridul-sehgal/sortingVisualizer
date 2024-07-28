// algorithms.ts
export const quickSort = async (
  array: number[],
  low: number,
  high: number,
  onSwap: (array: number[]) => void
): Promise<void> => {
  if (low < high) {
    const pivot = await partition(array, low, high, onSwap);
    await quickSort(array, low, pivot - 1, onSwap);
    await quickSort(array, pivot + 1, high, onSwap);
  }
};

const partition = async (
  array: number[],
  low: number,
  high: number,
  onSwap: (array: number[]) => void
): Promise<number> => {
  let i = low;
  let j = high;
  const pivot = array[low];

  while (i < j) {
    while (array[i] <= pivot && i < high) {
      i++;
    }

    while (array[j] > pivot && j > low) {
      j--;
    }

    if (i < j) {
      [array[i], array[j]] = [array[j], array[i]];
      onSwap([...array]);
      await new Promise((resolve) => setTimeout(resolve, 70));
    }
  }
  [array[low], array[j]] = [array[j], array[low]];
  onSwap([...array]);
  await new Promise((resolve) => setTimeout(resolve, 70));
  return j;
};
