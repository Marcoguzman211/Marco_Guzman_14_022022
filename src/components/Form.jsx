import {useFormik} from "formik";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import US_STATES from "../utils/US_STATES";
import DEPARTMENTS from "../utils/DEPARTMENTS";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../feature/employeeSlice';
import Modal from "./Modal";
import {useState} from "react";

const Form = () => {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			dateOfBirth: null,
			startDate: null,
			street: "",
			city: "",
			state: "",
			zipCode: "",
			department: "",

		},
		validate: values => {
			const errors = {};
			if (!values.dateOfBirth || !values.lastName || !values.firstName){
				errors.dateOfBirth = 'This field is Required';
			} else {
				const minDate = new Date();
				minDate.setFullYear(minDate.getFullYear() - 18);
				const maxDate = new Date();
				maxDate.setFullYear(1900);
				if (values.dateOfBirth > minDate) {
					errors.dateOfBirth = 'You must be at least 18 years old';
				} else if (values.dateOfBirth < maxDate) {
					errors.dateOfBirth = 'Birthdate must be after 1900';
				}
			}
			return errors;
		},
		onSubmit: values => {
			dispatch(addEmployee(values));
			setShowModal(true);
			console.log(values);
		},
	});
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg">
				<h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
					Create Employee
				</h1>
				{showModal && <Modal setShowModal={setShowModal}
				                     employeeName={formik.values.firstName + " "  + formik.values.lastName}
				                     onClose={() => setShowModal(false)}
				/>
				}
				<form
					onSubmit={formik.handleSubmit}
					className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
				>
					<label
						htmlFor="firstName"
						className="text-sm font-medium"
					>First Name</label>
					<input
						id="firstName"
						name="firstName"
						className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>

					<label
						htmlFor="lastName"
						className="text-sm font-medium"
					>Last Name</label>
					<input
						id="lastName"
						name="lastName"
						className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>

					<label
						htmlFor="dateOfBirth"
						className="text-sm font-medium"
					>Date of Birth</label>
					<DatePicker
						id="dateOfBirth"
						name="dateOfBirth"
						className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						selected={formik.values.dateOfBirth}
						onChange={date => formik.setFieldValue('dateOfBirth', date)}
						dateFormat="dd/MM/yyyy"
						showYearDropdown
						yearDropdownItemNumber={100}
						maxDate={new Date()}
						minDate={new Date(1900, 0, 1)}
					/>
					{formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
						<div className="text-red-500 text-sm">{formik.errors.dateOfBirth}</div>
					)}
					<label htmlFor="startDate" className="text-sm font-medium">Start Date</label>
					<DatePicker
						id="startDate"
						name="startDate"
						className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						selected={formik.values.startDate}
						onChange={date => formik.setFieldValue('startDate', date)}
						dateFormat="dd/MM/yyyy"
						maxDate={new Date()}
						minDate={new Date(2000, 0, 1)}
						yearDropdownItemNumber={100}
						showYearDropdown
					/>
					{formik.errors.startDate && formik.touched.startDate && (
						<div className="text-red-500 text-sm">{formik.errors.startDate}</div>
					)}
					<fieldset className="border border-gray-200 p-4 rounded-lg">
						<legend className="text-lg font-medium mb-2">Address</legend>
						<label
							htmlFor="street"
							className="text-sm font-medium"
						>Street</label>
						<input
							id="street"
							name="street"
							className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.street}
						/>
						<label
							htmlFor="city"
							className="text-sm font-medium"
						>City</label>
						<input
							id="city"
							name="city"
							className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.city}
						/>
						<label htmlFor="state" className="text-sm font-medium">State</label>
						<select
							id="state"
							name="state"
							className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							onChange={formik.handleChange}
							value={formik.values.state}
						>
							<option value="">Select a state</option>
							{US_STATES.map(state => (
								<option key={state.abbreviation} value={state.name}>{state.name}</option>
							))}
						</select>
						{formik.errors.state && formik.touched.state && (
							<div className="text-red-500 text-sm">{formik.errors.state}</div>
						)}
						<label htmlFor="zipCode" className="text-sm font-medium">Zip Code</label>
						<input
							id="zipCode"
							name="zipCode"
							className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							type="text"
							pattern="[0-9]*"
							onChange={formik.handleChange}
							value={formik.values.zipCode}
						/>
						{formik.errors.zipCode && formik.touched.zipCode && (
							<div className="text-red-500 text-sm">{formik.errors.zipCode}</div>
						)}
					</fieldset>
					<label htmlFor="department" className="text-sm font-medium">Department</label>
					<select
						id="department"
						name="department"
						className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						onChange={formik.handleChange}
						value={formik.values.department}
					>
						{/*<option value="">Department</option>*/}
						{DEPARTMENTS.map(department => (
							<option key={department.name} value={department.name}>{department.name}</option>
						))}
					</select>
					{formik.errors.department && formik.touched.department && (
						<div className="text-red-500 text-sm">{formik.errors.department}</div>
					)}
					<button
						type="submit"
						className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};
export default Form;
