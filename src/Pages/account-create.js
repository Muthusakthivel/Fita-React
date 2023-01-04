import React from "react";

const AccountCreatePage = () => {
    return(
        <div>
            <h1>Create Your Account</h1>
            <div className='space'>
            <label className='label'>Enter Your Email ID</label>
            <input type="text" placeholder='Please enter your username' id="username"/>
        </div>
        <div className='space'>
            <label className='label'>Enter Your Password</label>
            <input  placeholder='Please enter your Password' id="password"/>
        </div>
        <div className='space'>
            <button>Submit Form</button>
        </div>
        </div>
    )
}
export default AccountCreatePage;