import React from 'react';
import Working1 from '../../assets/working1.png';
import Working2 from '../../assets/working2.png';
import Working3 from '../../assets/working3.png'

const Talent = () => {
	return <div className="bg-black flex flex-col pt-36 pb-96">
		<div>
			<p className="text-white text-4xl font-semibold text-center">Working with</p>
			<p className="text-red-400 text-4xl font-semibold text-center">our talented team</p>
			<div className="px-12 md:px-40 lg:px-60 mt-12">
				<p className="text-lg text-gray-600 text-center">We pride ourselves on having a team of experts who are passionate about what they do and dedicated to delivering top-notch solutions that meet your unique needs. Our team includes software developers, web designers, digital marketers, and project managers who work together to ensure that your project is a success.</p>
			</div>
		</div>
		<div className="flex flex-row justify-between mt-20">
			<img
				src={Working1}
				alt="icon"
				className="object-cover hidden md:flex h-96 2xl:h-auto"
			/>
			<div className="mx-4">
				<img
					src={Working2}
					alt="icon"
					className="object-cover px-4 md:px-0 h-96 2xl:h-auto"
				/>
			</div>
			<img
				src={Working3}
				alt="icon"
				className="object-cover hidden md:flex h-96 2xl:h-auto"
			/>
		</div>
	</div>;
}

export default Talent
