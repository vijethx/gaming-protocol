import Image from "next/image";
import React from "react";
import nft from "../images/nft.png";

const Nft = () => {
	return (
		<div className="w-[1464px] h-[560px] flex items-center justify-center">
			<div className="">this is a text</div>
			<div className="flex items-center justify-evenly">
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={340}
						height={340}
					/>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={340}
						height={340}
					/>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={340}
						height={340}
					/>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={340}
						height={340}
					/>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={340}
						height={340}
					/>
				</div>
			</div>
		</div>
	);
};

export default Nft;
