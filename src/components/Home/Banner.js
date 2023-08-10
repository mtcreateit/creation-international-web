import React from 'react';
import BannerImage from '../../assets/banner.svg';
import IconScrollDown from '../../assets/icon_scroll_down.svg';

const Banner = () => {
	const scrollTo = async (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = -100; // Set an offset to adjust the scroll position (in pixels)
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset - 100;

			await window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};
	return (
		<div className="flex flex-col lg:flex-row justify-center bg-[#F9FAFB]">
			<div className="flex flex-col lg:flex-row justify-center max-w-screen-3xl px-[16px] md:px-[40px] lg:px-[26px]">
				<div className="flex flex-col lg:w-1/2 pt-[40px] md:pt-[80px] pb-[56px]">
					<div className="flex flex-1 flex-col justify-center">
						<h2 className="text-[40px] md:text-[64px] font-medium mb-4 w-full md:w-3/4 text-[#222222] tracking-wide leading-tight">The Power of Technology:</h2>
						<h2 className="text-[40px] md:text-[64px] font-medium mb-4 w-full md:w-3/4 text-[#E1523D] tracking-wide leading-tight">Empowering Your Business</h2>
						<p className="text-lg text-[#474747] w-full md:w-3/4 font-normal">
							We design and build cloud, web & mobile applications for people who want to change things for the better.
						</p>
						<p className="text-lg text-[#474747] font-bold mt-2">
							What can we build for you?
						</p>
					</div>
					<div className="mt-[24px] md:mt-20 lg:mt-40 flex flex-row flex-1 items-end">
						<div onClick={() => scrollTo('Process')} className="flex flex-row items-center">
							<img
								src={IconScrollDown}
								alt="Icon Scroll Down"
								className="w-12 h-12"
							/>
							<p className="ml-2 text-lg">
								Scroll down to learn more
							</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 lg:px-8 md:px-0">
					<img
						src={BannerImage}
						alt="Large Picture"
						className="object-cover w-full h-auto min-h-full lg:h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
