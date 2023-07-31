import React from 'react';
import Icon from '../../assets/ourteam.png';
import { ourTeamData } from '../../const';

const OurTeam = () => {
	return (
		<div className="flex flex-col md:flex-row mt-24 bg">
			<div className="flex flex-col w-full md:w-5/12 px-8 md:px-0 p-4 md:h-full">
				<div className="md:px-12">
					<p className="text-xl">
						We follow a proven process to ensure that we deliver solutions that meet your unique needs and exceed your expectations.
					</p>
					<div className="mt-6">
						<p className="text-5xl font-semibold mb-4 inline">Our team's <p className="inline text-red-400">process</p></p>
					</div>
				</div>
				<img
					className="w-full mt-24 hidden md:flex h-auto min-h-fit"
					src={Icon}
					alt="Sample Image"
				/>
			</div>
			<div className="flex md:w-7/12 md:px-0 md:h-full">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{ourTeamData.map((item, index) => (
							<div key={index} className="p-4">
								<img
									src={item.icon}
									alt="icon"
								/>
								<div className="mt-4">
									<h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
								</div>
								<p className="text-xl text-gray-600">{item.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurTeam;
