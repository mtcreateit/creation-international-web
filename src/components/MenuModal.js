import React from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default function MenuModal({ onPress, isModalOpen }) {
	const navigate = useNavigate();
	const scrollTo = async (id) => {
		await onPress();
		await navigate("/")
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

	return <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex">
		<div className="flex flex-1 flex-col">
			<div className="w-full h-[80px] border-b-2">
				<Header onPress={onPress} isModalOpen={isModalOpen} />
			</div>
			<div className="px-6 md:px-12 pt-[40px] md:pt-[80px] flex flex-1">
				<div className="text-sm lg:flex-grow">
					<button
						onClick={() => scrollTo('Process')}
						className="block mt-4 lg:inline-block lg:mt-0 text-[28px] hover:text-[#E1523D] mr-8"
					>
						Process
					</button>
					<button
						onClick={() => scrollTo('Services')}
						className="block mt-[40px] lg:inline-block lg:mt-0 text-[28px] hover:text-[#E1523D] mr-8"
					>
						Services
					</button>
					<button
						onClick={() => scrollTo('AboutUs')}
						className="block mt-[40px] lg:inline-block lg:mt-0 text-[28px] hover:text-[#E1523D] mr-8"
					>
						About us
					</button>
					<a className="block mt-[40px] lg:inline-block lg:mt-0 text-[28px] hover:text-[#E1523D] mr-8">
						<Link to="/privacy-policy">Privacy Policy</Link>
					</a>
					<a className="block mt-[40px] lg:inline-block lg:mt-0 text-[28px] hover:text-[#E1523D] mr-8">
						<Link to="/refunds-cancellations">Refunds cancellations</Link>
					</a>
					<button
						className="block mt-[40px] lg:inline-block lg:mt-0 text-base border border-[#E1523D] text-[#E1523D] font-semibold px-6 py-1.5 hover:bg-red-400 hover:text-white">
						Contact
					</button>
				</div>
			</div>
			<div>
				<nav className="flex items-center justify-between bg-white border-t-2 lg:py-12 lg:px-0  px-[40px] py-[20px]">
					<div className="flex items-center justify-center w-full">
						<p className="text-center">Copyright @ 2023 Creation International. All Right Reserved</p>
					</div>
				</nav>
			</div>
		</div>
	</div>;
}
