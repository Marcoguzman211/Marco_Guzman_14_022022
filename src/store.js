import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./feature/employeeSlice";

const reducer = {
	auth: employeeReducer,
};

const store = configureStore({
	reducer: reducer,
	devTools: true,
});

export default store;
