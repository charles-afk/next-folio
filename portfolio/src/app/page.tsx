"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import AboutMe from "./components/AboutMe/AboutMe";

export default function Home() {

  	const [isScrolled, setIsScrolled] = useState(false);

	  useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
  	}, []);

 	return (
		<main className="min-h-screen relative">
			<HomeComponent/>
			<div className="mt-0 pt-5 -mb-40" id="about-me" style={{ backgroundImage: "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)", width: "100%" }}>
				<div className="container m-auto">
					<AboutMe/>
				</div>
			</div>
			{isScrolled ? (
				<div onClick={() => window.scrollTo(0, 0)} className="bg-red-500 p-4 w-fit rounded-xl fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-6 h-6 text-white">
						<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
					</svg>
				</div>
			) : (
				""
			)}
		</main>
  	);
}
