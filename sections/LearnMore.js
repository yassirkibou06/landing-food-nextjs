"use client"

import { motion } from "framer-motion";
import { slideIn, textVariant2, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import { learnSection } from "@/constants";

const LearnMore = () => {
    return (
        <div className="flex flex-row-reverse mt-24">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 1 }}
            className="relative overflow-hidden md:overflow-visible bg-gradient-six w-[85%] md:h-[85vh] p-5 md:py-5 md:px-14 rounded-seven mb-10 md:mb-52 md:grid md:grid-cols-2 md:gap-24">
                <div className="pt-14 pr-10">
                <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-lg md:text-xl text-first mb-2 md:mb-4 pt-6">{learnSection.titleOne}</motion.h2>
                <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-2xl md:text-5xl md:mb-4 mb-3 md:pl-44 md:leading-[1.2em]">{learnSection.titleTwo}</motion.h1>
                <motion.h3 variants={textVariant2} initial="hidden" whileInView="show" className="font-semibold text-sm md:text-base mb-3 md:mb-5">{learnSection.titleThree}</motion.h3>
                <div className="p-5 grid gap-2 md:block">
                <motion.a href="https://play.google.com" target="_blank" variants={textVariant2} initial="hidden" whileInView="show"
                    className='z-0 md:ml-5  md:px-7 md:py-3 px-5 py-2 border-solid rounded-[12px] border-[1px] border-fourth font-bold text-first text-[1rem] duration-700 relative 
                before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] cursor-pointer
                before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:before:border-1 hover:text-white'
                >
                    {learnSection.textBtnOne}
                </motion.a>
                <motion.a href="https://www.apple.com/fr/app-store/" target="_blank" variants={textVariant2} initial="hidden" whileInView="show"
                    className='z-0 md:ml-5 md:px-7 md:py-3 px-5 py-2 border-solid rounded-[12px] border-[1px] border-fourth font-bold text-first text-[1rem] duration-700 relative 
                before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] cursor-pointer
                before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:before:border-1 hover:text-white'
                >
                    {learnSection.textBtnTwo}
                </motion.a>
                </div>
            </div>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                className="h-80 mt-24 md:mt-0">
                <div className="absolute left-5 -top-14 md:w-52">
                    <Image src={learnSection.imgTwo} alt='' width={120} height={120} className="md:w-full md:h-full" />
                </div>
                <div className="z-[1] absolute right-32 md:right-11 -top-12 md:w-96">
                    <Image src={learnSection.imgOne} alt='' width={150} height={150} className="md:w-full md:h-full" />
                </div>
                <div className="z-[-1] absolute right-24 md:-right-5 top-11 md:top-16 w-48 md:w-52">
                    <Image src={learnSection.imgThree} alt='' width={150} height={150} className="md:w-full md:h-full" />
                </div>
            </motion.div>
        </motion.div>
        </div>
    )
}

export default LearnMore