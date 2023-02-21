import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";
import {home, employeeList} from "./routes";

const Router = createBrowserRouter([
    {
        path: home,
        element: <Home />,
    },
    {
        path: employeeList,
        element: <Employees />,
    },
    {
        path: "/*",
        element: <NotFound />,
    }
]);
function App() {
  return (
    <>
        <RouterProvider router={Router} />
    </>
  );
}

export default App;
