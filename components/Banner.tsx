"use client";

import { useEffect, useState } from "react";

const Banner = () => {
	const [page, setPage] = useState<number>(1);
	const [isMobile, setMobile] = useState<boolean>(false);

	useEffect(() => {
		let int = setInterval(() => {
			setPage((prevState) =>
				prevState + 1 >= 3 ? 1 : prevState + 1
			);
		}, 5000);

		if (window.innerWidth <= 500) {
			setMobile(true);
		}

		return () => clearInterval(int);
	}, []);

	return (
		<div
			className={`relative flex ${
				isMobile ? "h-[50vh]" : "h-[calc(100vh-65px)]"
			} w-full flex-col justify-center items-center`}>
			<div className="absolute w-full h-full">
				<img
					src={`/image_${page}.jpg`}
					className="w-full h-full object-cover"
					sizes="100vw"
					alt="banner-image"
				/>
			</div>
		</div>
	);
};

export default Banner;
