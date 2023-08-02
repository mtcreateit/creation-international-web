import React from 'react';
import ContactIcon from '../../assets/contact.png';

const Contact = () => {
	return <div className="bg-white pt-20 px-8 md:px-12 lg:px-40 pb-40">
		<div className="flex flex-col lg:flex-row rounded-xl drop-shadow-lg bg-white -mt-80 pb-20">
			<div className="lg:w-1/2">
				<div className="pt-12 pl-8 md:pl-12">
					<p className="text-5xl font-semibold">Get in touch</p>
					<div className="mt-2 pb-40 w-3/4">
						<p className="text-xl text-gray-600 leading-10">Ready to take your business to the next level? Contact us today to learn more about how we can help you achieve your goals through innovative IT solutions.</p>
					</div>
				</div>
				<img
					src={ContactIcon}
					alt="Large Picture"
					className="object-cover hidden lg:flex absolute bottom-0 rounded-xl"
				/>
			</div>
			<div className="lg:w-1/2 px-8 md:px-12 lg:pr-20 pb-12 lg:pb-0">
				<div className="pt-12">
					<p className="text-2xl font-semibold">We’d love to hear from you!</p>
				</div>
				<div className="mt-8">
					<p className="text-xl font-semibold">Your email</p>
					<input placeholder="Please input your email" className="w-full border-2 h-12 p-4 mt-2 rounded" />
				</div>
				<div className="mt-8">
					<p className="text-xl font-semibold">Your Name</p>
					<input placeholder="Please input your name" className="w-full border-2 h-12 p-4 mt-2 rounded" />
				</div>
				<div className="mt-8">
					<p className="text-xl font-semibold">Your Phone</p>
					<input placeholder="Please input your phone number" className="w-full border-2 h-12 p-4 mt-2 rounded" />
				</div>
				<div className="mt-8">
					<p className="text-xl font-semibold">Message</p>
					<input multiple placeholder="Tell us your goal! E.g. I want TOP 3 on Google, etc." className="w-full border-2 h-32 p-4 mt-2 rounded" />
				</div>
				<div className="mt-8">
					<button className="flex lg:inline-block lg:mt-0 text-base border border-red-400 text-red-400 font-semibold px-6 py-3 hover:bg-red-400 hover:text-white">
						SEND MESSAGE
					</button>
				</div>
			</div>
		</div>
	</div>
}
export default Contact
