import React, {useState} from 'react';

const RegisterPage = () => {

    let [register, setRegister] = useState({
        userName: '',
        emailId: '',
        password: '',
        dateOfBirth: '',
        gender: '',
        hobbies: '',
        address: '',
        qualification: ''
    });
    const submitRegister = () => {
        console.log(register);
    }
    const handleInput = (event) => {
        setRegister({...register, [event.target.name]: event.target.value});
    }
    return(
        <div>
            <h1>Register Page</h1>
            <div className='space'>
                <label className='register-label'>Enter Your Name :</label>
                <input type="text" placeholder="Enter your name" className='register-input' onChange={handleInput} name='userName'/>
            </div>
            <div className='space'>
                <label className='register-label'>Enter Your Email ID :</label>
                <input type="text" placeholder="Enter Your Email ID" className='register-input' onChange={handleInput} name='emailId'/>
            </div>
            <div className='space'>
                <label className='register-label'>Enter Your Password :</label>
                <input type="password" placeholder="Enter Your Password" className='register-input' onChange={handleInput} name='password'/>
            </div>
            <div className='space'>
                <label className='register-label'>Select Your DOB : </label>
                <input type="date"  className='register-input' onChange={handleInput} name='dateOfBirth'/>
            </div>
            <div className='space'>
                <label className='register-label'>Select Your Gender : </label>
                <input type="radio" name='gender' className='register-selection' onChange={handleInput} value="Male" />Male
                <input type="radio" name='gender' className='register-selection' onChange={handleInput} value="Female"/>Female
                <input type="radio" name='gender' className='register-selection' onChange={handleInput} value="others"/>Others
            </div>
            <div className='space'>
                <label className='register-label'>Select Your Hobbies : </label>
                <input type="checkbox" onChange={handleInput} value="cricket" name='hobbies'/>Cricket
                <input type="checkbox" onChange={handleInput} value="Badminton" name='hobbies'/>Badminton
                <input type="checkbox" onChange={handleInput} value="Football" name='hobbies'/>Football
            </div>
            <div className='space'>
                <label className='register-label'>Enter Your Address</label>
                <textarea name='address' placeholder='Enter your address' className='register-input' onChange={handleInput}></textarea>
            </div>
            <div className='space'>
                <label className='register-label'>Select your Highest Qualification :</label>
                <select className='register-input' defaultValue={""} onChange={handleInput} name='qualification'>
                    <option disabled value="">Please select your qualification</option>
                    <option>Under Graduate</option>
                    <option>Post Graduate</option>
                    <option>Engineering Degree</option>
                    <option>Diploma Degree</option>
                    <option>Masters Degree</option>
                </select>
            </div>
            <div className='space'>
                <button onClick={()=> submitRegister()}>Create Your Account</button>
            </div>
        </div>
    )
}
export default RegisterPage;