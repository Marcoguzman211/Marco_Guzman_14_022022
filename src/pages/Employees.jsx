import React from "react";
import Footer from "../components/Footer";
import EmployeeList from "../components/EmployeeList";
import HRHeader from "../components/HRHeader";

const Employees = () => {
	return (
		<div>
			<HRHeader />
			<EmployeeList />
			<Footer />
		</div>

	);
};

export default Employees;
