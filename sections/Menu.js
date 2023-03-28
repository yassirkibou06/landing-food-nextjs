"use client"

import { menuSection, menuCard } from '@/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { fadeIn, staggerContainer, textVariant, textVariant2 } from '@/utils/motion';

const Menu = () => {
    return (
    
        <div id="menu" className="text-center pb-40 md:pt-8 overflow-hidden
        relative before:content-[''] before:absolute before:z-[-99] md:before:right-[920px] before:top-14 
        md:before:top-24 before:w-96 before:h-96 md:before:w-[700px] md:before:h-[700px] before:rounded-full before:bg-gradient-radial"
        >
            <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-lg md:text-xl text-first mb-2 md:mb-4 pt-6">{menuSection.titleOne}</motion.h2>
            <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-2xl md:text-5xl md:mb-4 mb-2">{menuSection.titleTwo}</motion.h1>
            <motion.p variants={textVariant2} initial="hidden" whileInView="show" te className="font-normal text-sm md:text-base mb-14 md:mb-20">{menuSection.titleThree}</motion.p>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: 'false', amount: 0.25 }}
                className="grid grid-rows-3 md:flex md:flex-row-reverse justify-center gap-20 md:gap-9">
                {
                    menuCard.map((l, index) => (
                        <motion.div
                            drag
                            whileHover={{ scale: 1.1, originY: -1 }}
                            transition={{ duration: 0.5 }}
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className={`z-[99] bg-white relative mt-10 w-64 md:w-60 md:h-72 flex flex-col shadow-one ${l.id == "card-1" ? 'rounded-one' : l.id === "card-2" ? 'rounded-six' : 'rounded-six'}  pb-5 px-2`} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.1, originY: 0 }}
                                className={`z-[99] pr-16 md:pr-11 w-60 h-32 md:w-64 md:h-36 rounded-full flex 
                            justify-center items-center`}
                            >
                                <Image
                                    src={l.cardImage}
                                    alt=""
                                    width={170}
                                    height={150}
                                    className="md:w-full" />
                            </motion.div>
                            <div className={`${l.id == "card-1" ? 'mt-16' : l.id === "card-2" ? 'mt-9' : 'mt-9'} `}>
                                <h3 className="font-bold text-[1.1rem] md:text-[1.3rem] text-menu-clr mb-2">{l.textCardOne}</h3>
                                <div className="flex flex-row-reverse justify-end pr-16 md:pr-11 gap-1">
                                    <span className="text-first md:text-2xl">
                                        <AiFillStar />
                                    </span>
                                    <span className="text-first md:text-2xl">
                                        <AiFillStar />
                                    </span>
                                    <span className="text-first md:text-2xl">
                                        <AiFillStar />
                                    </span>
                                    <span className="text-first md:text-2xl">
                                        <AiOutlineStar />
                                    </span>
                                </div>
                                <h2 className="flex items-center justify-center absolute left-1 -bottom-2 shadow-two 
                            font-bold text-[0.95rem] md:text-[1.2rem] duration-75 w-12 h-12 bg-gradient-four text-menu-clr rounded-full ">{l.prix}</h2>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
            <div className="pt-20 md:pt-24">
                <motion.a href="#" variants={textVariant2} initial="hidden" whileInView="show"
                    className=' z-0 md:px-7 md:py-3 px-5 py-2 border-solid rounded-[12px] border-[1px] border-fourth font-bold text-first text-[1rem] duration-700 relative 
                before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] cursor-pointer
                before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:before:border-1 hover:text-white'
                >
                    {menuSection.textBtn}
                </motion.a>
            </div>
        </div>
    )
}

export default Menu;