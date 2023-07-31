import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Home/Banner';
import OurTeam from '../../components/Home/OurTeam';
import Services from '../../components/Home/Services';
import Talent from '../../components/Home/Talent';
import Contact from '../../components/Home/Contact';
import Footer from '../../components/Footer';

export default function Home(props) {
	return <div>
		<Header/>
		<Banner/>
		<div id="Process">
			<OurTeam/>
		</div>
		<div id="Services">
			<Services/>
		</div>
		<div id="AboutUs">
			<Talent/>
		</div>
		<div id="Contact">
			<Contact/>
		</div>
		<Footer/>
	</div>;
}
