import Image from "next/image";
import React from "react";
import heroImg from "../images/heroImg.png";

const Hero = () => {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="font-bold text-4xl my-5">Gaming that pays</h1>
			<h3 className="text-xl mb-10">
				Earn while renting your exclusive skins and skill within the
				game
			</h3>
			<Image
				src={heroImg}
				alt={""}
			/>
		</div>
	);
};

export default Hero;
