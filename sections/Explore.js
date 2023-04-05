"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { exploreCard } from '@/constants';
import { fadeIn, staggerContainer, textVariant, textVariant2 } from '@/utils/motion';

const Explore = () => {
  return (
    <div className="py-16">
        <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-lg md:text-2xl text-first mb-12 md:mb-16 pt-6 text-center">أستكشف حسب الفئة</motion.h2>
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: 'false',amount: 0.25}}
            className="grid grid-rows-3 md:flex md:flex-row-reverse justify-center gap-20 md:gap-9">
                {
                    exploreCard.map((l, index) => (
                        <motion.div 
                        whileHover={{ scale: 1.1, originY: -1 }}
                        transition={{ duration: 0.5 }}
                        variants={fadeIn('right', 'spring', index * 0.5,0.75)}
                        className={`relative ${l.id == "card-1" 
                        ? 'bg-gradient-three' : l.id == 'card-2' 
                        ? 'bg-gradient-four' : l.id == 'card-3' 
                        ? 'bg-gradient-five' : l.id == 'card-4' 
                        ? 'bg-gradient-three' : '' } w-64 md:w-52 md:h-56 flex 
                        items-center flex-col shadow-one rounded-six  pb-5 px-5`} key={index}>
                            <div className={`bg-white absolute shadow-three -top-7 w-24 h-24 md:w-32 md:h-32 rounded-full flex 
                            justify-center items-center`}
                            >
                                <Image
                                    src={l.cardImage}
                                    alt=""
                                    width={50}
                                    height={50}
                            />
                            </div>
                            <h3 className="font-normal mt-32 text-[1.1rem] md:text-[1.2rem]">{l.textCardOne}</h3>
                        </motion.div>
                    ))
                }
            </motion.div>
    </div>
  )
}

export default Explore