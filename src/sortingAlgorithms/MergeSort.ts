
export const mergeSort = async (
  array: number[],
  low: number,
  high: number,
  onSwap: (array: number[]) => void
): Promise<void> => {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);
  await mergeSort(array, low, mid, onSwap);    // left half
  await mergeSort(array, mid + 1, high, onSwap); // right half
  await merge(array, low, mid, high, onSwap);   // merging sorted halves
};

const merge = async (
  array: number[],
  low: number,
  mid: number,
  high: number,
  onSwap: (array: number[]) => void
) => {
  const temp: number[] = [];
  let left = low;     // starting index of left half of array
  let right = mid + 1; // starting index of right half of array

  // storing elements in the temporary array in a sorted manner
  while (left <= mid && right <= high) {
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++;
    } else {
      temp.push(array[right]);
      right++;
    }
  }

  // if elements on the left half are still left
  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }

  // if elements on the right half are still left
  while (right <= high) {
    temp.push(array[right]);
    right++;
  }

  // transferring all elements from temporary to array
  for (let i = low; i <= high; i++) {
    array[i] = temp[i - low];
    onSwap([...array]);
    await new Promise((resolve) => setTimeout(resolve, 30)); // delay for visualization
  }
};
