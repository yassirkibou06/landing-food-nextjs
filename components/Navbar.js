'use client'

import Image from 'next/image';
import { motion } from "framer-motion"
import { heroSection } from '@/constants';
import { navVariants } from '@/utils/motion';


const NavBar = () => {
  /////

  return (
    <motion.div 
    variants={navVariants}
    initial="hidden"
    animate="show"
    className='flex justify-between mb-9 md:mb-12'>
      <div>
        <Image 
        src="/images/Logo.png" 
        objectFit="cover"
        width={100}
        height={100}
        className="w-16 md:w-20"
        alt="" 
        />
      </div>
      <div className='pt-2'>
        <a className='btn mx-5 md:px-7 md:py-3 px-5 py-2 border-solid rounded-[12px] border-[1px] border-fourth font-bold text-first text-[1rem] duration-700 relative 
          before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] 
          before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:before:border-1 hover:text-white' href='#contact'>
          {heroSection.contact}
        </a>
      </div>
    </motion.div>
  )
}

export default NavBar;