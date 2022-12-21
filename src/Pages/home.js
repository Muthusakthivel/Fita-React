import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>This is a Home Page</h1>
            <NavLink to="/contact">Go to Contact Page</NavLink>
            <br />
            <NavLink to="/about">About Me!</NavLink>
            <br />
            <NavLink to="/mail">Go to Mail Page</NavLink>
            <br />
        </div>
    )
}
export default HomePage;
