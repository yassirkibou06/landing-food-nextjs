import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '../sections/Hero';
import BestFood from '@/sections/BestFood';
import About from '@/sections/About';
import Menu from '@/sections/Menu';
import Explore from '@/sections/Explore';
import TheySaid from '@/sections/TheySaid';
import LearnMore from '@/sections/LearnMore';
import OrderNow from '@/sections/OrderNow';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/sections/ScrollToTop';

export default async function Page() {
  return (
    <>
      <div className='overflow-visible font-Arabic h-[100vh] relative before:content-[""] before:absolute before:z-[-1] before:left-52 md:before:left-[800px] before:-top-14 md:before:-top-80 before:w-96 before:h-96 md:before:w-[800px] md:before:h-[800px] before:rounded-full before:bg-gradient-radial' >
        <div className="px-7 pt-4 md:px-20 md:pt-5">
        <Navbar  />
        <Hero />
        <BestFood />
        </div>
        <About />
        <Menu />
        <div className="px-7 pt-4 md:px-20 md:pt-5">
          <Explore />
          <TheySaid />
        </div>
        <LearnMore />
        <div className="px-7 pt-4 md:px-20 md:pt-5">
          <OrderNow />
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </>
  )
}
