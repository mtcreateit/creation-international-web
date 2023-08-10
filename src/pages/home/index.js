import React, { useState } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Home/Banner';
import OurTeam from '../../components/Home/OurTeam';
import Services from '../../components/Home/Services';
import Talent from '../../components/Home/Talent';
import Contact from '../../components/Home/Contact';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import MenuModal from '../../components/MenuModal';

export default function Home(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return <div>
		<Header isModalOpen={isModalOpen} onPress={toggleModal} />
		<Banner/>
		<div id="Process" style={{ zIndex: 0 }}>
			<OurTeam/>
		</div>
		<div id="Services" className="relative" style={{ zIndex: 10 }}>
			<Services/>
		</div>
		<div id="AboutUs">
			<Talent/>
		</div>
		<div id="Contact">
			<Contact/>
		</div>
		<Footer/>
		{isModalOpen && (
			<MenuModal isModalOpen={isModalOpen} onPress={toggleModal} />
		)}
	</div>;
}
