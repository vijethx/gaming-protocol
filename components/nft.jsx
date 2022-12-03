import Image from "next/image";
import React from "react";
import logo from "../images/logo.png";
import nft from "../images/nft.png";
import omar from "../images/omar.png";

const Nft = () => {
	return (
		<div className="flex items-center justify-around">
			<div className="">
				<Image
					src={logo}
					alt=""
					width={100}
					height={100}
					className="rounded-full"
				/>
				<h1 className="text-white font-bold text-3xl mt-10">
					This is the title
				</h1>
				<h2 className="text-white font-bold text-xl mt-10">
					This is the subtitle
				</h2>
			</div>
			<div className="flex items-center justify-evenly">
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={250}
						height={250}
						className="rounded-t-2xl"
					/>
					<div className="h-[124px] w-[250px] bg-black rounded-b-2xl">
						<div className="flex text-white pl-10 py-4">
							<Image
								src={omar}
								alt=""
								width={30}
								height={30}
								className="mr-2"
							/>
							<p>@omarzrobles</p>
						</div>
						<div className="flex items-center justify-evenly text-white">
							<div className="">
								<p>Current Bid</p>
								<h2 className="text-lg font-bold">0.69 ETH</h2>
							</div>
							<div className="">
								<p>Ends in</p>
								<h2 className="text-lg font-bold">
									21h 45m 41s
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={250}
						height={250}
						className="rounded-t-2xl"
					/>
					<div className="h-[124px] w-[250px] bg-black rounded-b-2xl">
						<div className="flex text-white pl-10 py-4">
							<Image
								src={omar}
								alt=""
								width={30}
								height={30}
								className="mr-2"
							/>
							<p>@omarzrobles</p>
						</div>
						<div className="flex items-center justify-evenly text-white">
							<div className="">
								<p>Current Bid</p>
								<h2 className="text-lg font-bold">0.69 ETH</h2>
							</div>
							<div className="">
								<p>Ends in</p>
								<h2 className="text-lg font-bold">
									21h 45m 41s
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={250}
						height={250}
						className="rounded-t-2xl"
					/>
					<div className="h-[124px] w-[250px] bg-black rounded-b-2xl">
						<div className="flex text-white pl-10 py-4">
							<Image
								src={omar}
								alt=""
								width={30}
								height={30}
								className="mr-2"
							/>
							<p>@omarzrobles</p>
						</div>
						<div className="flex items-center justify-evenly text-white">
							<div className="">
								<p>Current Bid</p>
								<h2 className="text-lg font-bold">0.69 ETH</h2>
							</div>
							<div className="">
								<p>Ends in</p>
								<h2 className="text-lg font-bold">
									21h 45m 41s
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-2xl p-2 m-2">
					<Image
						src={nft}
						alt=""
						width={250}
						height={250}
						className="rounded-t-2xl"
					/>
					<div className="h-[124px] w-[250px] bg-black rounded-b-2xl">
						<div className="flex text-white pl-10 py-4">
							<Image
								src={omar}
								alt=""
								width={30}
								height={30}
								className="mr-2"
							/>
							<p>@omarzrobles</p>
						</div>
						<div className="flex items-center justify-evenly text-white">
							<div className="">
								<p>Current Bid</p>
								<h2 className="text-lg font-bold">0.69 ETH</h2>
							</div>
							<div className="">
								<p>Ends in</p>
								<h2 className="text-lg font-bold">
									21h 45m 41s
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nft;
