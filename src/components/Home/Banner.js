import React from 'react';
import BannerImage from '../../assets/banner.png';
import IconScrollDown from '../../assets/icon_scroll_down.png';

const Banner = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center">
			<div className="flex flex-col lg:w-1/2 p-8 md:px-12 lg:px-12">
				<div className="flex flex-1 flex-col justify-center">
					<h2 className="text-5xl font-semibold mb-4 lg:w-3/4 text-gray-900 tracking-wide leading-tight">The Power of Technology:</h2>
					<h2 className="text-5xl font-semibold mb-4 lg:w-3/4 text-red-400 tracking-wide leading-tight">Empowering Your Business</h2>
					<p className="text-lg text-gray-900 w-3/4">
						We design and build cloud, web & mobile applications for people who want to change things for the better.
					</p>
					<p className="text-lg text-gray-900 font-bold mt-2">
						What can we build for you?
					</p>
				</div>
				<div className="mt-20 lg:mt-40 flex flex-row flex-1 items-end">
					<div className="flex flex-row items-center">
						<img
							src={IconScrollDown}
							alt="Icon Scroll Down"
							className="w-12 h-12"
						/>
						<p className="ml-2">
							Scroll down to learn more
						</p>
					</div>
				</div>
			</div>
			<div className="lg:w-1/2 px-8 md:px-12 lg:px-0">
				<img
					src={BannerImage}
					alt="Large Picture"
					className="object-cover w-full h-auto min-h-full lg:h-full"
				/>
			</div>
		</div>
	);
};

export default Banner;
