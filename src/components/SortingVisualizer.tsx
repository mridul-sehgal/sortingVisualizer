"use client";
import React, { useState, useEffect } from "react";
import getMergeSortAnimations from "@/sortingAlgorithms/MergeSort";

function SortingVisualizer() {
  const [array, setArray] = useState<number[]>([]);

  // Function to generate random numbers and reset the array
  const resetArray = () => {
    const myArray: number[] = [];
    for (let i = 0; i < 100; i++) {
      myArray.push(insertRandomNumber(5, 500));
    }
    setArray(myArray);
  };

  // Function to generate a random number within a range
  const insertRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to handle merge sort
  const handleMergeSort = () => {
    const animations = getMergeSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "#4ade80";

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  };

  // Function to initialize the array when component mounts
  useEffect(() => {
    resetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-baseline">
        {/* Display bars based on array values */}
        {array.map((value, index) => (
          <div
            className="array-bar w-1 bg-green-500 m-1"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>

      {/* Button section for array operations */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={resetArray}
          className="bg-green-400 text-white rounded-3xl py-4 px-8 my-10"
        >
          Regenerate The Array
        </button>
        <button
          onClick={handleMergeSort}
          className="bg-green-400 text-white rounded-3xl py-4 px-8 my-10"
        >
          Sort Using Merge Sort
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
