import React from 'react';
import Logo from '../assets/logo.png';

export default function Footer(props) {
	return <nav className="flex items-center justify-between flex-wrap bg-white p-6">
		<div className="flex items-center flex-shrink-0 text-base mr-6">
			<img src={Logo} alt="Logo" className="h-8 mr-2" />
			<span className="font-semibold text-lg tracking-tight">Creation International</span>
		</div>
		<div className="flex items-center w-auto justify-end mt-4 md:mt-0">
			<p>Copyright @ 2023 Creation International. All Right Reserved</p>
		</div>
	</nav>;
}
