import React from 'react';
import ServiceIcon from '../../assets/services.svg';

const Services = () => {
	return <div
		className="md:-mt-2 mt-0 w-full flex flex-col lg:flex-row justify-center bg-[#F9FAFB]">
		<div className="flex flex-col lg:flex-row max-w-screen-3xl px-[16px] md:px-8">
			<div className="flex flex-1 lg:w-1/2 lg:px-0 z-50">
				<img
					src={ServiceIcon}
					alt="Large Picture"
					className="object-cover w-full h-auto lg:h-full z-50"
				/>
			</div>
			<div className="flex flex-col lg:w-1/2 lg:ml-[112px] md:ml-0 py-[80px]">
				<div className="flex flex-1 flex-col">
					<p
						className="inline text-[32px] font-semibold mb-4 text-gray-900 tracking-wide leading-tight">What <p
						className="inline text-[#E1523D]">services</p> we provide
					</p>
					<p className="text-lg text-black">With the "customer-centric" philosophy, we always make
						the best experience in our services to achieve your goals and satisfaction.</p>
					<div className=" mt-8">
						<h3 className="text-xl font-medium mb-2">Software Development</h3>
						<p className="text-lg text-black">Looking out for customized solutions for your
							websites? Our team will develop and deliver a website that’ll serve your purpose.</p>
					</div>
					<div className=" mt-8">
						<h3 className="text-xl font-medium mb-2">Computer networking</h3>
						<p className="text-lg text-black">Hire us for cloud computing services that will help
							you store, manage, and process your data in a secure and scalable way.</p>
					</div>
					<div className=" mt-8">
						<h3 className="text-xl font-medium mb-2">Ui/Ux Design</h3>
						<p className="text-lg text-black">Our web design team has ample years of experience in
							the core areas of design to build a website that you need.</p>
					</div>
					<div className=" mt-8">
						<h3 className="text-xl font-medium mb-2">Digital Marketing</h3>
						<p className="text-lg text-black">With researched digital marketing, we will ensure that
							new customers and clients are able to find your business.</p>
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export default Services;
