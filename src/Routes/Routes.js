import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dahboard/Dashboard";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/dashboard', element: <Dashboard></Dashboard> }
        ]
    }
])
export default routes;