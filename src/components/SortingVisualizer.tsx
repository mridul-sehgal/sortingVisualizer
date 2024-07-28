"use client";
import React, { useState, useEffect } from "react";
import { quickSort } from "@/sortingAlgorithms/QuickSort";
import { mergeSort } from "@/sortingAlgorithms/MergeSort";
import { bubbleSort } from "@/sortingAlgorithms/BubbleSort";
import { insertionSort } from "@/sortingAlgorithms/InsertionSort";
import { selectionSort } from "@/sortingAlgorithms/SelectionSort";

function SortingVisualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [items, setItems] = useState(50);
  // Function to generate random numbers and reset the array

  const resetArray = () => {
    const myArray: number[] = [];
    for (let i = 0; i < items; i++) {
      myArray.push(insertRandomNumber(5, 500));
    }
    setArray(myArray);
  };

  // Function to generate a random number within a range
  const insertRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleBubbleSort = async () => {
    const arr = [...array];
    await bubbleSort(arr, setArray);
  };

  const handleMergeSort = async () => {
    const arr = [...array];
    await mergeSort(arr, 0, arr.length - 1, setArray);
  };

  const handleQuickSort = async () => {
    const arr = [...array];
    await quickSort(arr, 0, arr.length - 1, setArray);
  };

  const handleInsertionSort = async () => {
    const arr = [...array];
    await insertionSort(arr, setArray);
  };

  const handleSelectionSort = async () => {
    const arr = [...array];
    await selectionSort(arr, setArray);
  };

  // Function to initialize the array when component mounts
  useEffect(() => {
    resetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className="flex flex-col bg-[#F8EDED] rounded-lg my-14">
      <div className="flex justify-center mt-14  items-baseline">
        {/* Display bars based on array values */}
        {array.map((value, index) => (
          <div
            className="array-bar w-1 bg-orange-400 m-1"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center my-4 justify-center gap-4">
          <button
            onClick={resetArray}
            className="bg-[#B43F3F] hover:bg-[#021526] text-white rounded-3xl py-4 px-8 "
          >
            Regenerate The Array
          </button>
          <input
            type="range"
            min={10}
            max={100}
            value={items}
            className=" slider cursor-pointer"
            onChange={(e) => {
              setItems(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleMergeSort}
            className="bg-[#B43F3F] hover:bg-[#021526] text-white rounded-3xl py-4 px-8 mb-6"
          >
            Merge Sort
          </button>
          <button
            onClick={handleQuickSort}
            className="bg-[#B43F3F] hover:bg-[#021526] text-white rounded-3xl py-4 px-8 mb-6"
          >
            Quick Sort
          </button>
          <button
            onClick={handleBubbleSort}
            className="bg-[#B43F3F] hover:bg-[#021526] text-white rounded-3xl py-4 px-8 mb-6"
          >
            Bubble Sort
          </button>

          <button
            onClick={handleInsertionSort}
            className="bg-[#B43F3F] hover:bg-[#021526] text-white rounded-3xl py-4 px-8 mb-6"
          >
            Insertion Sort
          </button>

          <button
            onClick={handleSelectionSort}
            className="bg-[#B43F3F] hover:bg-[#021526] text-white rounded-3xl py-4 px-8 mb-6"
          >
            Selection Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingVisualizer;
