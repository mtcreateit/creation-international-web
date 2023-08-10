import React from 'react';
import Working1 from '../../assets/working1.png';
import Working2 from '../../assets/working2.png';
import Working3 from '../../assets/working3.png'

const Talent = () => {
	return <div className="bg-black flex flex-col lg:pt-[136px] pt-[80px] pb-[80px] md:pb-96 lg:pb-[550px]">
		<div>
			<p className="text-white text-4xl font-semibold text-center">Working with</p>
			<p className="text-[#E1523D] text-4xl font-semibold text-center">our talented team</p>
			<div className="px-[16px] md:px-12 lg:px-60 mt-[20px]">
				<p className="text-lg text-[#ffffff72] text-center">We pride ourselves on having a team of experts who are passionate about what they do and dedicated to delivering top-notch solutions that meet your unique needs. Our team includes software developers, web designers, digital marketers, and project managers who work together to ensure that your project is a success.</p>
			</div>
		</div>
		<div className="flex flex-1 flex-row justify-between mt-[80px]">
			<div className="h-[550px] w-1/12 lg:w-3/12">
				<img
					src={Working1}
					alt="icon"
					className="object-cover md:flex min-h-[200px] md:min-h-[550px] 2xl:h-auto"
				/>
			</div>
			<div className="mx-4 h-[550px] w-10/12 lg:w-6/12">
				<img
					src={Working2}
					alt="icon"
					className="object-cover px-4 min-h-[200px] md:min-h-[550px] 2xl:h-auto"
				/>
			</div>
			<div className="h-[550px] w-1/12 lg:w-3/12">
				<img
					src={Working3}
					alt="icon"
					className="object-cover md:flex min-h-[200px] md:min-h-[550px] 2xl:h-auto"
				/>
			</div>
		</div>
	</div>;
}

export default Talent
