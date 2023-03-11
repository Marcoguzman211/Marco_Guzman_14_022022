import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { Provider } from "react-redux";
import store from "../store";

test('renders Home component when /home route is accessed', () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
	/*const homeElement = screen.getByTestId('home-component');*/
	const homeElement = screen.getByText("Create Employee");
	expect(homeElement).toBeInTheDocument();
});
