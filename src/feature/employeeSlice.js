import { createSlice } from "@reduxjs/toolkit";
import INITIAL_EMPLOYEES from "../utils/INITIAL_EMPLOYEES";

const initialState = {
	employees: INITIAL_EMPLOYEES,
};

export const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			// Check if employee already exists
			const { firstName, lastName, dateOfBirth } = action.payload;
			const employeeExists = state.employees.some(
				employee =>
					employee.firstName === firstName &&
					employee.lastName === lastName &&
					employee.dateOfBirth === dateOfBirth
			);
			if (employeeExists) {
				// Employee already exists, do not add it again
				return;
			}
			// Add employee to state
			state.employees.unshift(action.payload);
		},
	},
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
