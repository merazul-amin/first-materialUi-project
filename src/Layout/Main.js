import { Outlet } from "react-router-dom";
import React from 'react';

const Main = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;