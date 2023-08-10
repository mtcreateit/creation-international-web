import React from 'react';
import Logo from '../assets/logo.svg';

export default function Footer(props) {
	return <nav className="flex items-center justify-between flex-col md:flex-row bg-white border-t-2 lg:py-12 lg:px-0  px-[40px] py-[20px]">
		<div className="flex items-center flex-shrink-0 text-base md:mr-6">
			<img src={Logo} alt="Logo" className="h-8 mr-2" />
			<span className="font-semibold text-lg tracking-tight">Creation International</span>
		</div>
		<div className="flex items-center w-auto justify-end mt-4 md:mt-0">
			<p className="text-center">Copyright @ 2023 Creation International. All Right Reserved</p>
		</div>
	</nav>;
}
