import {Link} from "react-router-dom";

const Employees = () => {
	return (
		<div>
			<h1>Employees</h1>
			<Link to={"/"}>
				<button
					className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
				>Back to home</button>
			</Link>
		</div>
	);
}

export default Employees;
