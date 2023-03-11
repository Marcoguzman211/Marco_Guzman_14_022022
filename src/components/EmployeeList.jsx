import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';

const EmployeeList = () => {
	// Select all employees from the Redux store
	const allEmployees = useSelector((state) => state.employees.employees);
	// Set up the current page to be displayed initially as page 1
	const [currentPage, setCurrentPage] = useState(1);
	// Set up the number of employees to be displayed per page to 5
	const [employeesPerPage] = useState(5);
	// Set up the search term for filtering employees initially as an empty string
	const [searchTerm, setSearchTerm] = useState('');
	// Set up the initial sort order to be ascending
	const [sortOrder, setSortOrder] = useState('asc');
	// Set up the initial sort column to be 'firstName'
	const [sortColumn, setSortColumn] = useState('lastName');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		setCurrentPage(1);
	};

	const handleSort = (column) => {
		if (column === sortColumn) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		} else {
			setSortColumn(column);
			setSortOrder('asc');
		}
		setCurrentPage(1);
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString().substr(-2);
		return `${day}/${month}/${year}`;
	};


	const filterEmployees = (employees) => {
		const searchTermLowerCase = searchTerm.toLowerCase();
		return employees.filter((employee) => {
			return (
				employee.firstName.toLowerCase().includes(searchTermLowerCase) ||
				employee.lastName.toLowerCase().includes(searchTermLowerCase) ||
				employee.department.toLowerCase().includes(searchTermLowerCase) ||
				employee.street.toLowerCase().includes(searchTermLowerCase) ||
				employee.city.toLowerCase().includes(searchTermLowerCase) ||
				employee.state.toLowerCase().includes(searchTermLowerCase) ||
				employee.zipCode.toLowerCase().includes(searchTermLowerCase)
			);
		});
	};

	/* This code is sorting an array of employees based on a selected column and a selected sort order.
	* */
	const sortedEmployees = filterEmployees(allEmployees).sort((a, b) => {
		const columnA = a[sortColumn].toLowerCase();
		const columnB = b[sortColumn].toLowerCase();
		if (columnA < columnB) {
			return sortOrder === 'asc' ? -1 : 1;
		}
		if (columnA > columnB) {
			return sortOrder === 'asc' ? 1 : -1;
		}
		return 0;
	});
	/*
	* The result is a new array containing only the employees that should be displayed on the current page.
	* */
	const currentEmployees = sortedEmployees.slice(
		(currentPage - 1) * employeesPerPage,
		currentPage * employeesPerPage
	);
	/*
	* This code generates an array of page numbers based on the number of items per page and the total number of items to be paginated.
	* */
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(sortedEmployees.length / employeesPerPage); i++) {
		pageNumbers.push(i);
	}

	const renderPageNumbers = pageNumbers.map((number) => (
		<Pagination.Item key={number}
		                 active={number === currentPage}
		                 className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
		                 onClick={() => setCurrentPage(number) }>
			{number}
		</Pagination.Item>
	));

	return (
		<>
			<Form.Group controlId="searchTerm">
				<Form.Control type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
			</Form.Group>
			<Table className="w-full bg-white border-collapse border-gray-300 overflow-hidden">
				<thead className="bg-gray-200 text-gray-700">
				<tr>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('firstName')}>
						First Name {sortColumn === 'firstName' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('lastName')}>
						Last Name {sortColumn === 'lastName' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('startDate')}>
						Start Date {sortColumn === 'startDate' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('department')}>
						Department {sortColumn === 'department' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('dateOfBirth')}>
						Date of Birth {sortColumn === 'dateOfBirth' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('street')}>
						Street {sortColumn === 'street' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('city')}>
						City {sortColumn === 'city' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('state')}>
						State {sortColumn === 'state' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
					<th className="font-medium py-2 px-3 text-left" onClick={() => handleSort('zipCode')}>
						Zip Code {sortColumn === 'zipCode' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
					</th>
				</tr>
				</thead>
				<tbody>
				{currentEmployees.map((employee) => (
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
			<Pagination className="flex space-x-2">{renderPageNumbers}</Pagination>
		</>
	)
};

export default EmployeeList;
