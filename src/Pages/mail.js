import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const MailPage = () => {
    return (
        <div className='container'>
            <div className="header"></div>
            <div className="main-content">
                <div className='sidebar'>
                    <NavLink to="/mail/inbox">Inbox Page</NavLink>
                    <br />
                    <NavLink to="/mail/sent">Sent Page</NavLink>
                    <br />
                    <NavLink to="/mail/trash">Trash Page</NavLink>
                    <br />
                    <NavLink to="/mail/account">Account Page</NavLink>
                    <br />
                    <NavLink to="/mail/update">Update User Page</NavLink>
                </div>
                <div className='content'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
           
    )
}
export default MailPage;