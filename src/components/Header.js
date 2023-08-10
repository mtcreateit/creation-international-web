import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header({onPress, isModalOpen}) {
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

	return (
		<nav className="flex items-center justify-between flex-wrap bg-white px-[16px] md:px-[40px] py-[20px] lg:px-6">
			<div className="flex items-center flex-shrink-0 text-base mr-6">
				<img src={Logo} className="h-8 mr-2"/>
				<span className="font-semibold text-lg tracking-tight">Creation International</span>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={onPress}
					className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600">
					{
						isModalOpen ? <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<line x1="0" y1="0" x2="12" y2="12" stroke="black" stroke-width="2" />
							<line x1="12" y1="0" x2="0" y2="12" stroke="black" stroke-width="2" />
						</svg> : <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
							<path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/>
						</svg>
					}
				</button>
			</div>
			<div className={`w-full lg:flex lg:items-center lg:w-auto justify-end hidden`}>
				<div className="text-sm lg:flex-grow">
					<button
						className="block mt-4 lg:inline-block lg:mt-0 text-base hover:text-[#E1523D] mr-8"
						onClick={() => scrollTo('Process')}
					>
						Process
					</button>
					<button
						className="block mt-4 lg:inline-block lg:mt-0 text-base hover:text-[#E1523D] mr-8"
						onClick={() => scrollTo('Services')}
					>
						Services
					</button>
					<button
						className="block mt-4 lg:inline-block lg:mt-0 text-base hover:text-[#E1523D] mr-8"
						onClick={() => scrollTo('AboutUs')}
					>
						About us
					</button>
					<a className="block mt-4 lg:inline-block lg:mt-0 text-base hover:text-[#E1523D] mr-8">
						<Link to="/privacy-policy">Privacy Policy</Link>
					</a>
					<a className="block mt-4 lg:inline-block lg:mt-0 text-base hover:text-[#E1523D] mr-8">
						<Link to="/refunds-cancellations">Refunds cancellations</Link>
					</a>
					<button onClick={() => scrollTo('Contact')}
									className="block mt-4 lg:inline-block lg:mt-0 text-base border border-[#E1523D] text-[#E1523D] font-semibold px-6 py-1.5 hover:bg-red-400 hover:text-white">
						Contact
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Header;
