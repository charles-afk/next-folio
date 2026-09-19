"use client";
import React, { useEffect, useState, Fragment } from "react";
import Hamburger from './Hamburger'
import './Hamburger.css'
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const openDrawer = (): void => {
    setIsOpen(true)
  }

  useEffect(() => {
    const handleScroll = (): void => {
      const { scrollTop } =  document?.documentElement ?? {};
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`diagonal-drawer ${isOpen  ? "open" : ""}`}>
        <Hamburger
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <header className={`${ isScrolled ? "headerShow" : "" } w-full fixed top-0 z-50 transition-all duration-500`}>
        <div className="relative">
          <div className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl"
          onClick={openDrawer}>
            <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
              <Image height={100} width={100} src="/drawer.png" alt="drawer item" className="w-[150px] h-10"/>
            </div>
          </div>
        </div>
          <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
            <ul className="flex font-recoletaBlack flex-row items-center h-24">
              <li className="group text-2xl relative font-bold mr-20" >
              {selectedIndex === 0 ?(
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ):(
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
                <a className={`menu-item ${selectedIndex === 0 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                href="/#home" onClick={()=> setSelectedIndex(0)}>
                    Home
                </a>
              </li>
              <li className="group text-2xl relative font-bold mr-20" >
              {selectedIndex === 1 ?(
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ):(
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
                <a className={`menu-item ${selectedIndex === 1 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                href="/#about-me-component" onClick={()=> setSelectedIndex(1)}>
                  About Me
                </a>
              </li>
              <li className="group text-2xl relative font-bold mr-20" >
              {selectedIndex === 2 ?(
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ):(
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
                <Link className={`menu-item ${selectedIndex === 2 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                href="/contact-me" onClick={()=> setSelectedIndex(2)}>
                  Hire Me
                </Link>
              </li>
              <li className="group text-2xl relative font-bold mr-20" >
              {selectedIndex === 3 ?(
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ):(
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
                <Link className={`menu-item ${selectedIndex === 3 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                href="/portfolio" onClick={()=> setSelectedIndex(3)}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
      </header>
    </Fragment>
  )
}
