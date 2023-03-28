"use client"

import { aboutSection } from "@/constants";
import { motion } from "framer-motion";
import { slideIn, textVariant2, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import imageOne from '/public/images/frameOne.png';
import imageTwo from '/public/images/frameTwo.png';
import imageThree from '/public/images/framethree.png';
import imageFour from '/public/images/Bitmap1.png'

const About = () => {
    return (
        <motion.div
            id="about"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 1 }}
            className="relative bg-gradient-six w-[85%] md:h-[85vh] p-5 md:py-5 md:px-14 rounded-three mb-10 md:mb-52 md:grid md:grid-cols-2 md:gap-24">
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
                className="left h-80 ">
                <div className="absolute md:right-72 right-44 -top-7 md:w-40">
                    <Image src={imageFour} alt='' width={120} height={120} className="md:w-full md:h-full" />
                </div>
                <div className="absolute right-2 -top-12">
                    <Image src={imageTwo} alt='' width={150} height={150} className="rounded-four md:w-full md:h-full" />
                </div>
                <div className="absolute right-44 md:right-72 top-11 md:top-16 md:w-60">
                    <Image src={imageOne} alt='' width={150} height={150} className="rounded-five md:w-full md:h-full" />
                </div>
                <div className="absolute right-2 top-[68%] md:top-[130%] md:w-64 md:h-36">
                    <Image src={imageThree} alt='' width={150} height={150} className="md:w-full md:h-full" />
                </div>
            </motion.div>
            <div className="right pt-14 pr-10">
                <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-lg md:text-xl text-first mb-2 md:mb-4 pt-6">{aboutSection.titleOne}</motion.h2>
                <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-2xl md:text-5xl md:mb-4 mb-3 md:pl-44 md:leading-[1.2em]">{aboutSection.titleTwo}</motion.h1>
                <motion.h3 variants={textVariant2} initial="hidden" whileInView="show" className="font-semibold text-sm md:text-base mb-3 md:mb-5">{aboutSection.titleThree}</motion.h3>
                <motion.p variants={textVariant2} initial="hidden" whileInView="show" className="font-normal text-sm md:text-base mb-5 md:mb-11 text-p-color pl-14">{aboutSection.titleFour}</motion.p>
                <motion.a href="#" variants={textVariant2} initial="hidden" whileInView="show"
                    className='btn z-0 md:px-7 md:py-3 px-5 py-2 border-solid rounded-[12px] border-[1px] border-fourth font-bold text-first text-[1rem] duration-700 relative 
                before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] cursor-pointer
                before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:before:border-1 hover:text-white'
                >
                    {aboutSection.textBtn}
                </motion.a>
            </div>
        </motion.div>
    )
}

export default About;