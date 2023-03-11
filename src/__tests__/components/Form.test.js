import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../../components/Form';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Form component', () => {
	test('renders all form inputs', () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>
		);
		expect(screen.getByLabelText('First Name')).toBeInTheDocument();
		expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
		expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
		expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
		expect(screen.getByLabelText('Street')).toBeInTheDocument();
		expect(screen.getByLabelText('City')).toBeInTheDocument();
		expect(screen.getByLabelText('State')).toBeInTheDocument();
		expect(screen.getByLabelText('Zip Code')).toBeInTheDocument();
		expect(screen.getByLabelText('Department')).toBeInTheDocument();
		expect(screen.getByRole('button', {name: 'Save'})).toBeInTheDocument();
	});

	test('validates input fields', async () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>
		);
		fireEvent.input(screen.getByLabelText('First Name'), {target: {value: ''}});
		fireEvent.input(screen.getByLabelText('Last Name'), {target: {value: 'Smith'}});
		fireEvent.input(screen.getByLabelText('Date of Birth'), {target: {value: '01/01/2004'}});
		fireEvent.input(screen.getByLabelText('Start Date'), {target: {value: '01/01/2022'}});
		fireEvent.input(screen.getByLabelText('Street'), {target: {value: '123 Main St'}});
		fireEvent.input(screen.getByLabelText('City'), {target: {value: 'New York'}});
		fireEvent.input(screen.getByLabelText('State'), {target: {value: ''}});
		fireEvent.input(screen.getByLabelText('Zip Code'), {target: {value: '12345'}});
		fireEvent.input(screen.getByLabelText('Department'), {target: {value: ''}});
		fireEvent.click(screen.getByRole('button', {name: 'Save'}));
		expect(await screen.findByText('This field is Required')).toBeInTheDocument();
	});

	test('submits the form with valid input', async () => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>
		);
		fireEvent.input(screen.getByLabelText('First Name'), {target: {value: 'John'}});
		fireEvent.input(screen.getByLabelText('Last Name'), {target: {value: 'Smith'}});
		fireEvent.input(screen.getByLabelText('Date of Birth'), {target: {value: '01/01/1980'}});
		fireEvent.input(screen.getByLabelText('Start Date'), {target: {value: '01/01/2022'}});
		fireEvent.input(screen.getByLabelText('Street'), {target: {value: '123 Main St'}});
		fireEvent.input(screen.getByLabelText('City'), {target: {value: 'New York'}});
		fireEvent.input(screen.getByLabelText('State'), {target: {value: 'New York'}});
		fireEvent.input(screen.getByLabelText('Zip Code'), {target: {value: '12345'}});
		fireEvent.input(screen.getByLabelText('Department'), {target: {value: 'Sales'}});
		fireEvent.click(screen.getByRole('button', {name: 'Save'}));
		expect(await screen.findByText('Employee Created')).toBeInTheDocument();
	});
});
