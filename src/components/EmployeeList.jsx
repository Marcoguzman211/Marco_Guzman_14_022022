import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const EmployeeList = () => {
	const employees = useSelector((state) => state.employees.employees);
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString().substr(-2);
		return `${day}/${month}/${year}`;
	};
	return (
		<Table className="w-full bg-white border-collapse border-gray-300 overflow-hidden">
			<thead className="bg-gray-200 text-gray-700">
			<tr>
				<th className="font-medium py-2 px-3 text-left">First Name</th>
				<th className="font-medium py-2 px-3 text-left">Last Name</th>
				<th className="font-medium py-2 px-3 text-left">Start Date</th>
				<th className="font-medium py-2 px-3 text-left">Department</th>
				<th className="font-medium py-2 px-3 text-left">Date of Birth</th>
				<th className="font-medium py-2 px-3 text-left">Street</th>
				<th className="font-medium py-2 px-3 text-left">City</th>
				<th className="font-medium py-2 px-3 text-left">State</th>
				<th className="font-medium py-2 px-3 text-left">Zip Code</th>
			</tr>
			</thead>
			<tbody>
			{employees.map((employee) => (
				<tr key={employee.id} className="border-b border-gray-300">
					<td className="py-2 px-3">{employee.firstName}</td>
					<td className="py-2 px-3">{employee.lastName}</td>
					<td className="py-2 px-3">{formatDate(employee.startDate)}</td>
					<td className="py-2 px-3">{employee.department}</td>
					<td className="py-2 px-3">{formatDate(employee.dateOfBirth)}</td>
					<td className="py-2 px-3">{employee.street}</td>
					<td className="py-2 px-3">{employee.city}</td>
					<td className="py-2 px-3">{employee.state}</td>
					<td className="py-2 px-3">{employee.zipCode}</td>
				</tr>
			))}
			</tbody>
		</Table>
	);
}

export default EmployeeList;
