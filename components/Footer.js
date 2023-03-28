'use client'

import Image from "next/image";
import logo from "/public/images/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="mt-32 bg-white">
      <div className="mb-5 flex gap-5 md:flex-row-reverse flex-col md:justify-between">
        <div>
          <div className="mb-2">
            <Image src={logo} width={50} height={50} alt="" />
          </div>
          <div className="flex justify-end flex-row-reverse gap-2">
            <a href="https://web.facebook.com/" className="flex text-white items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-first">
              <FaFacebookF size={20} />
            </a>
            <a href="https://web.twitter.com/" className="flex text-white items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-second">
              <FaTwitter size={20} />
            </a>
            <a href="https://web.instagram.com/" className="flex text-white items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-fifth">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-first mb-3 text-lg md:text-xl font-bold">قائمة</h3>
          <ul>
            <li className="pb-2"><a href="#about" className="font-semibold">حول</a></li>
            <li className="pb-2"><a href="#menu" className="font-semibold">قائمة</a></li>
            <li className="pb-2"><a href="#theySaid" className="font-semibold">مقالات</a></li>
            <li><a href="#orderNow" className="font-semibold">اتصل</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-first mb-3 text-lg md:text-xl font-bold">سمات</h3>
          <ul>
            <li className="pb-2"><a href="#best" className="font-semibold">طعام طازج</a></li>
            <li className="pb-2"><a href="#orderNow" className="font-semibold">مطعم</a></li>
            <li><a href="#best" className="font-semibold">توصيل سريع</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-first mb-3 text-lg md:text-xl font-bold">النشرة الإخبارية</h3>
          <input type="email" name="email"
            placeholder="بريدك الالكتروني"
          pattern=".+@gmail.com" className="border-[#DADADA] border-[1px] border-solid px-5 py-2 rounded-[12px]"/><br /><br />
            <a href="#" className='inline-flex z-10 px-5 py-2 md:px-8 md:py-3 bg-second rounded-[12px] font-bold text-white text-sm md:text-base duration-700 relative 
            before:content-[""] before:z-[-1] before:absolute before:left-0 before:top-0 before:rounded-[12px] 
            before:bg-first before:w-0 before:h-full  before:transition-all before:duration-700 hover:before:w-full hover:text-black'
            >الإشتراك</a>
        </div>
      </div>
      <hr />
      <div className="text-center py-5">
        <p className="text-menu-clr font-light">حقوق النشر © 2023 رواق كل الحقوق محفوظة</p>
      </div>
    </div>
  )
}

export default Footer