import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const moveToTrash = () => {
        navigate("/mail/trash");
    }
    return (
        <div>
            <h1>This is a Home Page</h1>
            <NavLink to="/contact">Go to Contact Page</NavLink>
            <br></br>
            <NavLink to="/about">About Me!</NavLink>
            <br></br>
            <NavLink to="/mail">Go to Mail Page</NavLink>
            <br></br>
            <NavLink to="/register">Sign Up</NavLink>
            <br></br>
            <button onClick={() => moveToTrash()}>Move to Trash</button>
            <NavLink to="/users">To View List Of All Users</NavLink>
        </div>
    )
}
export default HomePage;
