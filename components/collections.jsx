import Image from "next/image";
import React from "react";
import collections from "../images/collections.png";
import styles from "../styles/Home.module.css";

const Collections = (props) => {
	return (
		<div className={`w-[342px] h-[490px] rounded-2xl p-2`}>
			<div className="flex items-center justify-between">
				<Image
					className="z-9999"
					src={collections}
					alt=""
				/>
				<div className="w-[114px] h-[114px] bg-orange-700 rounded-2xl"></div>
				<div class="relative p-1 rounded-full bg-gray-900 flex items-center justify-center text-white">
					MADWORLD
				</div>
			</div>
			<div class="p-2 -mt-28">
				<span class="text-white font-bold font-sans text-[32px]">
					Strange Scenes In A Mad World
				</span>{" "}
			</div>
		</div>
	);
};

export default Collections;
