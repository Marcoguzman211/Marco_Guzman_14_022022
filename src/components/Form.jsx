import {useFormik} from "formik";
const Form = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
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
					<button type="submit"
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
