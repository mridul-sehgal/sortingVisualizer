import React from "react";
import Image from 'next/image'
import instructions from "@/assets/instructions.png"
function Instructions() {
  return (
    <div className="bg-[#F8EDED] mt-14 rounded-lg px-8 flex justify-between items-center">
      <div>
        <p className='text-5xl my-8 font-bold text-[#FF8225]'>Instructions</p>
        <p className='text-2xl my-4 font-bold text-[#B43F3F]'> 1) Generate Array : Generates a random array for Visualization</p>
        <p className='text-2xl my-4 font-bold text-[#B43F3F]'> 2) Slider : Sets the Length of the array ranging from 10 to 100</p>
        <p className='text-2xl my-4 font-bold text-[#B43F3F]'> 3) Algorithms : Select the Algorithm of your and see the magic happening</p>
      </div>
      <Image src={instructions} alt="instructions"/>
    </div>
  );
}

export default Instructions;
