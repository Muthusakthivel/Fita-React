import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountCreatePage = () => {

    const navigate = useNavigate();

    let [account, setAccount] = useState({
       email : "",
       password : "" 
    });
    const createAccount = () => {
        console.log(account);

        const api_url = "https://reqres.in/api/register";

        axios.post(api_url, account)
            .then((response) => {
                let serverData = response.data;
                console.log(serverData);
                navigate("/about");
            })
            .catch((error) => {
                alert(error.message);
            })
    }
    const handleInput = (event) => {
        setAccount({...account, [event.target.id] : event.target.value});
    }
    return(
        <div>
            <h1>Create Your Account</h1>
            <div className='space'>
            <label className='label'>Enter Your Email ID</label>
            <input type="text" placeholder='Please enter your username' id="email" onChange={handleInput} />
        </div>
        <div className='space'>
            <label className='label'>Enter Your Password</label>
            <input  placeholder='Please enter your Password' type="password" id="password" onChange={handleInput}/>
        </div>
        <div className='space'>
            <button onClick={() => createAccount()}>Submit Form</button>
        </div>
        </div>
    )
}
export default AccountCreatePage;