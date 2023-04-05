"use client"

import { BestFoodCard, BestFoodSection } from '@/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, textVariant2 } from '@/utils/motion';

const BestFood = () => {
    return (
        <div id="best" className="text-center pb-40 md:pt-8">
            <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-lg md:text-xl text-first mb-2 md:mb-4 pt-6">{BestFoodSection.titleOne}</motion.h2>
            <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-2xl md:text-5xl md:mb-4 mb-2">{BestFoodSection.titleTwo}</motion.h1>
            <motion.p variants={textVariant2} initial="hidden" whileInView="show" te className="font-normal text-sm md:text-base mb-14 md:mb-20">{BestFoodSection.titleThree}</motion.p>
            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: 'false',amount: 0.25}}
            className="card grid grid-rows-3 md:flex md:flex-row-reverse justify-center gap-20 md:gap-9">
                {
                    BestFoodCard.map((l, index) => (
                        <motion.div 
                        whileHover={{ scale: 1.1, originY: -1 }}
                        transition={{ duration: 0.5 }}
                        variants={fadeIn('right', 'spring', index * 0.5,0.75)}
                        className={`w-64 md:w-72 flex items-center flex-col shadow-one ${l.id == "card-1" && "card-2" ? 'rounded-one' : l.id == "card-3" ? 'rounded-two' : 'rounded-one'}  pb-5 px-5`} key={index}>
                            <div className={`${l.id === "card-1" 
                            ? 'bg-gradient-three' : l.id === "card-2" 
                            ? 'bg-gradient-foor' : l.id === "card-3" 
                            ? 'bg-gradient-five' : '' } w-24 h-24 md:w-36 md:h-36 rounded-full flex 
                            justify-center items-center`}
                            >
                                <Image
                                    src={l.cardImage}
                                    alt=""
                                    width={50}
                                    height={50}
                            />
                            </div>
                            <h3 className="font-bold mt-4 text-[1.1rem] md:text-[1.2rem]">{l.textCardOne}</h3>
                            <p className="text-p-color font-normal text-sm md:text-base mt-4">{l.textCardTwo}</p>
                            <a href="#home" className="font-semibold text-[0.95rem] md:text-[1rem] mt-6 duration-75 hover:text-first">{l.textCardBtn}</a>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default BestFood;