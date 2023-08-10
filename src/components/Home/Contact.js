import React from 'react';
import ContactIcon from '../../assets/contact.svg';

const Contact = () => {
	return <div className="flex flex-col justify-center items-center bg-white pt-20 px-[16px] md:px-0 lg:px-40 pb-[120px]">
		<div className="flex flex-col max-w-screen-3xl justify-center px-0 md:px-[40px] lg:px-0">
			<div className="flex flex-col lg:flex-row rounded-xl drop-shadow-lg bg-white -mt-80 pb-20">
				<div className="lg:w-1/2">
					<div className="pt-[80px] pl-8 md:pl-[80px]">
						<p className="text-5xl font-medium text-[#222222]">Get in touch</p>
						<div className="mt-2 lg:pb-40 md:pb-20 w-3/4">
							<p className="text-lg text-[#222222] leading-10">Ready to take your business to the next level? Contact us today to learn more about how we can help you achieve your goals through innovative IT solutions.</p>
						</div>
					</div>
					<img
						src={ContactIcon}
						alt="Large Picture"
						className="object-cover md:w-3/4 lg:w-1/2 lg lg:flex absolute bottom-0 rounded-xl"
					/>
				</div>
				<div className="lg:w-1/2 px-8 md:px-[80px] lg:pr-[180px] pb-52 md:pb-64 lg:pb-0 lg:pt-[80px] mt-[40px] md:mt-0">
					<div>
						<p className="text-2xl font-semibold">We’d love to hear from you!</p>
					</div>
					<div className="mt-[32px]">
						<p className="text-[16px] font-medium">Your Email</p>
						<input placeholder="Please input your email" className="w-full text-[14px] border-2 h-12 p-4 mt-2 rounded" />
					</div>
					<div className="mt-[16px]">
						<p className="text-[16px] font-medium">Your Name</p>
						<input placeholder="Please input your name" className="w-full text-[14px] border-2 h-12 p-4 mt-2 rounded" />
					</div>
					<div className="mt-[16px]">
						<p className="text-[16px] font-medium">Your Phone</p>
						<input placeholder="Please input your phone number" className="w-full text-[14px] border-2 h-12 p-4 mt-2 rounded" />
					</div>
					<div className="mt-[16px]">
						<p className="text-[16px] font-medium">Message</p>
						<textarea placeholder="Tell us your goal! E.g. I want TOP 3 on Google, etc." className="w-full text-[14px] border-2 h-32 p-4 mt-2 rounded" />
					</div>
					<div className="mt-[32px]">
						<button onClick={() => {
							window.location.href = 'mailto:demo@test.app';
						}} className="flex lg:inline-block lg:mt-0 text-[14px] border border-[#E1523D] text-[#E1523D] font-semibold px-6 py-3 hover:bg-[#E1523D] hover:text-white">
							SEND MESSAGE
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
}
export default Contact
