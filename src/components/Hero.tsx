import React from 'react'
import Image from 'next/image'
import Gif from "@/assets/HeroGif.gif"
function Hero() {
  return (
    <div className='bg-[#F8EDED] my-14 rounded-lg p-8 flex justify-between items-center'>
        <div className='m-8 p-8'>
            <p className='text-8xl font-bold text-[#FF8225]'>The</p>
            <p className='text-8xl font-bold text-[#FF8225]'>Sorting</p>
            <p className='text-8xl font-bold text-[#FF8225]'>Visualizer</p>
            <p className='text-2xl mt-6 font-bold text-[#B43F3F]'>Sorting Made Simple: Visualize Algorithms in Action</p>
        </div>
        <Image  src={Gif} alt='Gif'/>
    </div>
  )
}

export default Hero