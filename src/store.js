import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./feature/employeeSlice";

// Reducers can be added to the store using the `reducer` option.
const reducer = {
	employees: employeesReducer,
};

const store = configureStore({
	reducer: reducer,
});
export default store;
