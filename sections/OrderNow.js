"use client"

import { motion } from "framer-motion";
import { slideIn, textVariant2, staggerContainer } from "@/utils/motion";
import imageOne from '/public/images/Object.png';

const OrderNow = () => {
    return (
        <div id="orderNow" className="mx-6 p-11 bg-white shadow-one rounded-one">
            <div className="flex items-center flex-col md:flex-row md:justify-between">
            <div>
            <motion.h1 variants={textVariant2} initial="hidden" whileInView="show" className="font-bold text-2xl md:text-5xl md:mb-4 mb-3 md:leading-[1.2em]">اطلب الان</motion.h1>
            <motion.p variants={textVariant2} initial="hidden" whileInView="show" className="font-normal text-sm md:text-base text-p-color">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</motion.p>
            </div>
            <motion.a href="#" variants={textVariant2} initial="hidden" whileInView="show"
            className='inline-flex z-10 mt-4 px-5 py-2 md:px-8 md:py-3 bg-second rounded-[12px] font-bold text-white text-sm md:text-base duration-700 relative 
            before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] 
            before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:text-black'
            >
                اتصل بنا
            </motion.a>
            </div>
        </div>
    )
}

export default OrderNow;