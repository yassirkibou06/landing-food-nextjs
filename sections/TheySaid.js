"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, textVariant2 } from '@/utils/motion';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { theySaidCard, theySaidSection } from '@/constants';

import "swiper/swiper.min.css";
import "swiper/css/pagination";


const TheySaid = () => {
  return (
    <>
      <div className="text-center py-11" id="theySaid">
        <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-lg md:text-xl text-first mb-2 md:mb-4 pt-6">{theySaidSection.titleOne}</motion.h2>
        <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-2xl md:text-5xl md:mb-4 mb-2">{theySaidSection.titleTwo}</motion.h1>
        <motion.p variants={textVariant2} initial="hidden" whileInView="show" te className="font-normal text-sm md:text-base mb-14 md:mb-20">{theySaidSection.titleThree}</motion.p>
      <Swiper
        
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 3, spaceBetween: 35 },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="grid grid-cols-2 md:grid-cols-3 px-8 py-10 md:p-16 md:m-16"
      >
        {
          theySaidCard.map((l, index) => (
            <SwiperSlide 
            className={`relative flex flex-col items-center shadow-one rounded-one p-6 md:p-4`} key={index}>
                <div className={`w-14 md:w-24 md:h-20 ml-20 mb-6 md:ml-32`}
                >
                    <Image
                        src={l.all}
                        alt=""
                        width={50}
                        height={50}
                />
                </div>
                <p className="text-p-color font-normal text-sm md:text-base mb-6">{l.textCardOne}</p>
                <div className="flex pr-16 md:pr-24 gap-2">
                                    <span className="text-first md:text-xl">
                                        <AiFillStar />
                                    </span>
                                    <span className="text-first md:text-xl">
                                        <AiFillStar />
                                    </span>
                                    <span className="text-first md:text-xl">
                                        <AiFillStar />
                                    </span>
                                    <span className="text-first md:text-xl">
                                        <AiOutlineStar />
                                    </span>
                </div>
                <h3 className="font-bold mt-2 text-[0.90rem] md:text-[1rem] md:pr-20 mb-7">{l.name}</h3>
                <div className='absolute right-0 -bottom-12 md:-bottom-16'
                >
                    <Image
                        src={l.cardImage}
                        alt=""
                        width={150}
                        height={150}
                        className="w-[85px] md:w-full"
                />
                </div>
            </SwiperSlide>
        ))
        }
      </Swiper>
      </div>
    </>
  );
}

export default TheySaid