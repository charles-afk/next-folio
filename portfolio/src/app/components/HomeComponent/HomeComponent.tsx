import React from 'react';
import { Hind } from 'next/font/google';
import Image from 'next/image'
import Header from "../Header/Header";

const hind = Hind({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function HomeComponent() {

  const backgroundImageStyle = {
    backgroundImage: 'linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)',
    minHeight: '500px', 
    maxHeight: '1200px',
    height: '100%',
    width: '100%',
  }

  return (
    <React.Fragment>
      <Header/>
      <div id='home' style={backgroundImageStyle}> 
        <div className="container m-auto ">
          <div className="grid grid-cols-12 ">
            <div className=" bg-white  flex flex-col justify-center col-span-12 md:col-span-5  md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 md:py-0 py-20 md:text-start text-center">
                  <p className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl ${hind.className}`}>
                    Hello There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-7xl md:text-6xl lg:text-7xl xl:text-8xl mt-5 md:mt-3">
                    I'm Charles
                  </h1>
                  <h2 className={`text-[#223740] py-2 font-bold uppercase text-md md:text-xs lg:text-xl ${hind.className}`} >
                    Software Engineer
                  </h2>
                  <a className={`inline-block bg-[#48AFDE] transition-all duration-300 ease-in-out rounded-lg text-white hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  href="/#about-me" >
                    About Me
                  </a>
                  <a href="/contact-me"
                  className={`ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white hover:bg-[#48AFDE] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}>
                    Reach Out For Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 col-span-12 md:pt-[130px] pt-[50px] md:bg-transparent bg-[#d9eef7]">
              <div className="m-auto container" style={{width: '50%', height: '50%', marginBottom: '100px'}}>
                <Image
                  className=""
                  alt="Software Engineer"
                  src="/agudeloLogo.jpg"
                  decoding="async"
                  data-nimg="intrinsic"
                  width={25}
                  height={25}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}