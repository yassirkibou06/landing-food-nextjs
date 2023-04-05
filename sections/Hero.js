/* eslint-disable @next/next/no-img-element */
'use client'

import frameOne from "../public/images/Frame 1.png";
import bitmapOne from "../public/images/Bitmap1.png";
import bitmap from "../public/images/Bitmap.png";
import ovalOne from "../public/images/Oval1.png";
import oval from "../public/images/Oval.png";
import ovalTwo from "../public/images/Oval2.png";
import shap from "../public/images/Combined Shape.png";
import Image from "next/image";
import { heroSection } from "@/constants";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <div>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      viewport={{once: false, amount: 0.25}}
      className='Hero mt-8 mb-20 md:grid md:grid-cols-2 lg:relative'>
        <motion.div className='left'>
          <motion.h2 variants={textVariant(1.1)} className="font-bold text-first text-lg md:text-3xl mb-2 md:mb-3" >{heroSection.hero_title_one}</motion.h2>
          <motion.h1 variants={textVariant(1.2)} className={`font-bold text-3xl md:text-6xl w-52 md:w-[25rem] mb-4 md:mb-5 leading-10 md:leading-[85px]`}>{heroSection.hero_title_two}</motion.h1>
          <motion.p variants={textVariant(1.3)} className={`font-normal leading-6 text-sm w-[85%] mb-4 md:mb-5 md:text-lg`}>{heroSection.hero_p}</motion.p>
          <motion.div variants={textVariant(1.4)} className='inline-flex z-10 px-5 py-2 md:px-8 md:py-3 bg-second rounded-[12px] font-bold text-white text-sm md:text-base duration-700 relative 
          before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] 
          before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:text-black' >
            <a  href='#menu'>
            {heroSection.hero_btn}
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='right relative md:unset mt-12 md:mt-5 h-[55vh] md:h-full'>
          <div className={`w-52 h52 absolute left-40 md:w-80 md:left-60 md:bottom-8 `}>
            <Image src={frameOne} alt="f" />
          </div>
          <div className='w-24 absolute top-14 left-28 md:left-36 md:w-40 md:-top-16'>
            <Image src={bitmapOne} alt="f" />
          </div>
          <div className='w-[160px] h-[200px] absolute top-28 left-10 z-[-1] md:w-[220px] md:top-8 md:left-24'>
            <Image src={bitmap} className="rounded-bl-[100px] rounded-[24px]" alt="f" />
          </div>
          <div className='flex absolute top-[300px] w-9 md:w-11 left-56 md:left-[21em] md:top-[340px]'>
            <Image className='z-[1] absolute' src={ovalOne} alt="" />
            <Image className='z-[-1] absolute left-7 md:left-8' src={oval} alt="" />
            <Image className='z-[-2] absolute left-14 md:left-16' src={ovalTwo} alt="" />
            <div className='flex items-center justify-center z-[-3] absolute bg-gradient-two left-20 md:left-24 rounded-full w-[35px] h-[35px] md:w-[42px] md:h-[42px]' >
              <Image className="pl-[2px] w-4 md:w-5" src={shap} alt="" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero;