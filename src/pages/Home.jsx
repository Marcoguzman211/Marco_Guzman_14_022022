import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import HRHeader from "../components/HRHeader";
const Home = () => {
	return (
		<div>
			{/*Header of HRNet*/}
			<HRHeader />
			{/*Render of the form to add new employee*/}
			<Form />
			{/*Footer of HRNet*/}
			<Footer />
		</div>
	);
};

export default Home;
