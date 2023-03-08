import React from 'react';

const Modal = ({ onClose, employeeName }) => {
	return (
		<div className="fixed z-50 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen px-4">
				<div className="fixed inset-0 bg-gray-500 opacity-75"></div>
				<div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 py-5 sm:p-6">
						<div className="sm:flex sm:items-start">
							<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
								<svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3 className="text-lg leading-6 font-medium text-indigo-900">Employee Created</h3>
								<div className="mt-2">
									<p className="text-sm text-indigo-500">
										New user created: {employeeName}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
