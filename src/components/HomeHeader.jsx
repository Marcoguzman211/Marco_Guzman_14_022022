import {Link} from "react-router-dom";

const HomeHeader = (
) => {
	return (
		<>
			<header aria-label="Page Header">
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<div className="text-center sm:text-left">
							<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
								HRNet
							</h1>
						</div>

						<div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
							<Link to={"/employees"}>
								<button
									className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
									type="button"
								>
									View current employees
								</button>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
};
export default HomeHeader;
