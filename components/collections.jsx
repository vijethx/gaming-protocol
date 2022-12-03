import Image from "next/image";
import React from "react";
import collections from "../images/collections.png";
import omar from "../images/omar.png";
import styles from "../styles/Home.module.css";

const Collections = (props) => {
	return (
		<div className="w-[342px] h-[490px] rounded-2xl p-2">
			<div className="">
				<Image
					className="z-9999 rounded-2xl"
					src={collections}
					alt=""
				/>
			</div>
			<div class="p-2 -mt-40">
				<span class="text-white font-bold font-sans text-[32px]">
					Strange Scenes In A Mad World
				</span>
				<div className="text-white p-2 mt-0  rounded-2xl z-10">
					<div className="flex items-center justify-start  bg-slate-400">
						<Image
							src={omar}
							alt=""
							width={30}
							height={30}
							className="mr-2"
						/>
						<p>@omarzrobles</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collections;
