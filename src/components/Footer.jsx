import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 pb-6">
			<div className="lg:grid lg:grid-cols-2">
				<div className="pt-8 mt-8 border-t border-gray-100">
					<nav aria-label="Footer Navigation - Support">
						<ul className="flex flex-wrap gap-4 text-xs">
							<li>
								<Link to="/" className="text-gray-500 transition hover:opacity-75">
									<span>Terms & Conditions</span>
								</Link>
							</li>

							<li>
								<Link to="/" className="text-gray-500 transition hover:opacity-75">
									<span>Privacy Policy</span>
								</Link>
							</li>

							<li>
								<Link to="/" className="text-gray-500 transition hover:opacity-75">
									<span>Cookies</span>
								</Link>
							</li>
						</ul>
					</nav>

					<p className="mt-8 text-xs text-gray-500">
            &copy; 2023 HRNet. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
