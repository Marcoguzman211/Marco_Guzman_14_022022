import { useFormik } from "formik";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const Form = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			birthDate: null,
		},
		validate: values => {
			const errors = {};
			if (!values.birthDate) {
				errors.birthDate = 'Required';
			} else {
				const minDate = new Date();
				minDate.setFullYear(minDate.getFullYear() - 18);
				const maxDate = new Date();
				maxDate.setFullYear(1900);
				if (values.birthDate > minDate) {
					errors.birthDate = 'You must be at least 18 years old';
				} else if (values.birthDate < maxDate) {
					errors.birthDate = 'Birthdate must be after 1900';
				}
			}
			return errors;
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg">
				<h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
					Create Employee
				</h1>
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
						htmlFor="birthDate"
						className="text-sm font-medium"
					>Birth Date</label>
					<DatePicker
						id="birthDate"
						name="birthDate"
						className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						selected={formik.values.birthDate}
						onChange={date => formik.setFieldValue('birthDate', date)}
						dateFormat="MM/dd/yyyy"
						showYearDropdown
						yearDropdownItemNumber={100}
						maxDate={new Date()}
						minDate={new Date(1900, 0, 1)}
					/>
					{formik.errors.birthDate && formik.touched.birthDate && (
						<div className="text-red-500 text-sm">{formik.errors.birthDate}</div>
					)}

					<button
						type="submit"
						className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
export default Form;
