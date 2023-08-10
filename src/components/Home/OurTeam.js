import React from 'react';
import Icon from '../../assets/ourteam.svg';
import { ourTeamData } from '../../const';

const OurTeam = () => {
	return (
		<div className="flex flex-col md:flex-row mt-[80px] lg:mt-40 md:mt-[80px] justify-center relative pb-[80px] md:pb-[160px] bg-white px-[16px] md:px-0">
			<div className="flex flex-col lg:flex-row max-w-screen-3xl">
				<div className="flex flex-col w-full lg:w-5/12 ml:px-8 md:px-10 md:h-full">
					<div>
						<p className="text-lg">
							We follow a proven process to ensure that we deliver solutions that meet your unique needs and exceed your expectations.
						</p>
						<div className="mt-6">
							<p className="text-[32px] md:text-5xl font-semibold mb-4 inline">Our team's <p className="inline text-[#E1523D]">process</p></p>
						</div>
					</div>
				</div>
				<div className="flex lg:w-7/12 md:px-0 md:h-full">
					<div className="container mx-auto md:mx-[40px]">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-0 md:mt-[48px]">
							{ourTeamData.map((item, index) => (
								<div key={index} className="pt-[32px] lg:p-4 md:py-4 md:px-0">
									<img
										src={item.icon}
										alt="icon"
									/>
									<div className="mt-4">
										<h3 className="text-2xl font-medium mb-2">{item.title}</h3>
									</div>
									<p className="text-lg text-black">{item.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex left-0 top-24">
				<img
					className="w-full mt-24 hidden md:flex h-auto min-h-fit z-0"
					src={Icon}
					alt="Sample Image"
				/>
			</div>
		</div>
	);
};

export default OurTeam;
