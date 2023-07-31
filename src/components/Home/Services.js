import React from 'react';
import IconScrollDown from '../../assets/icon_scroll_down.png';
import ServiceIcon from '../../assets/services.png';

const Services = () => {
	return <div className="md:-mt-2 lg:-mt-20 xl:-mt-96 mt-0 w-full flex flex-col lg:flex-row justify-center">
		<div className="lg:w-1/2 px-8 lg:px-0">
			<img
				src={ServiceIcon}
				alt="Large Picture"
				className="object-cover w-full h-auto min-h-full lg:h-full"
			/>
		</div>
			<div className="flex flex-col lg:w-1/2 p-8 md:px-12 lg:px-24">
				<div className="flex flex-1 flex-col mt-8">
					<p className="inline text-5xl font-semibold mb-4 text-gray-900 tracking-wide leading-tight">What <p className="inline text-red-400">services</p> we provide</p>
					<p className="text-xl text-gray-600">With the "customer-centric" philosophy, we always make the best experience in our services to achieve your goals and satisfaction.</p>
					<div className=" mt-8">
						<h3 className="text-xl font-semibold mb-2">Software Development</h3>
						<p className="text-lg text-gray-600">Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.</p>
					</div>
					<div className=" mt-8">
						<h3 className="text-xl font-semibold mb-2">Computer networking</h3>
						<p className="text-lg text-gray-600">Hire us for cloud computing services that will help you store, manage, and process your data in a secure and scalable way.</p>
					</div>
					<div className=" mt-8">
						<h3 className="text-xl font-semibold mb-2">Ui/Ux Design</h3>
						<p className="text-lg text-gray-600">Our web design team has ample years of experience in the core areas of design to build a website that you need.</p>
					</div>
					<div className=" mt-8">
						<h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
						<p className="text-lg text-gray-600">With researched digital marketing, we will ensure that new customers and clients are able to find your business.</p>
					</div>
				</div>
			</div>

	</div>;
}

export default Services;
