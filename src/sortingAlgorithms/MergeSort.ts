interface MergeSortParams {
  array: number[];
  low: number;
  high: number;
}

function mergeSort(array: number[], animations: number[][]): number[] {
  const auxArray = array.slice(); // Create an auxiliary array

  function merge(arr: number[], low: number, mid: number, high: number): void {
    let left = low;
    let right = mid + 1;
    let index = low;

    while (left <= mid && right <= high) {
      animations.push([left, right]); // Marking the indices being compared
      animations.push([left, right]); // Reverting back to the original color

      if (arr[left] <= arr[right]) {
        animations.push([index, arr[left]]); // Overwriting the value at index index
        auxArray[index++] = arr[left++];
      } else {
        animations.push([index, arr[right]]); // Overwriting the value at index index
        auxArray[index++] = arr[right++];
      }
    }

    while (left <= mid) {
      animations.push([left, left]); // Marking the index being compared
      animations.push([left, left]); // Reverting back to the original color
      animations.push([index, arr[left]]); // Overwriting the value at index index
      auxArray[index++] = arr[left++];
    }

    while (right <= high) {
      animations.push([right, right]); // Marking the index being compared
      animations.push([right, right]); // Reverting back to the original color
      animations.push([index, arr[right]]); // Overwriting the value at index index
      auxArray[index++] = arr[right++];
    }

    // Copy sorted elements from auxArray back to arr
    for (let i = low; i <= high; i++) {
      arr[i] = auxArray[i];
    }
  }

  function mergeSortHelper(arr: number[], low: number, high: number): void {
    if (low >= high) {
      return;
    }

    const mid = Math.floor((low + high) / 2);
    mergeSortHelper(arr, low, mid);
    mergeSortHelper(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }

  mergeSortHelper(array, 0, array.length - 1);
  return array;
}

export default function getMergeSortAnimations(array: number[]): number[][] {
  const animations: number[][] = [];
  if (array.length <= 1) return animations;
  mergeSort(array, animations);
  return animations;
}
