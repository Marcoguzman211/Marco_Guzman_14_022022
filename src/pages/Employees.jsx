import React from "react";
import Footer from "../components/Footer";
import EmployeeList from "../components/EmployeeList";
import HRHeader from "../components/HRHeader";

const Employees = () => {
	return (
		<div>
			{/*HRNet Header*/}
			<HRHeader />
			{/*Table showing a list of every employee list*/}
			<EmployeeList />
			{/*HRNet Footer*/}
			<Footer />
		</div>

	);
};

export default Employees;
