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
    let [formError, setFormError] = useState({
        userName: false,
        emailId: false,
        password: false,
        dateOfBirth: false,
        gender: false,
        hobbies: false,
        address:false,
        qualification: false
    });
    let [accountList, setAccountList] = useState([

    ]);
    const submitRegister = () => {
        console.log(register);
        setFormError({
            userName: register.userName === "" ? true : false,
            emailId: register.emailId === "" ? true : false,
            password: register.password === "" ? true : false,
            dateOfBirth: register.dateOfBirth === "" ? true : false,
            gender: register.gender === "" ? true : false,
            hobbies: register.hobbies === "" ? true : false,
            address: register.address === "" ? true : false,
            qualification: register.qualification === "" ? true : false
        });
        // for(let field in formError){
        //     if(formError[field] === true){
        //         return;
        //     }
        // }
       // alert('');
    }
    const handleInput = (event) => {
        setRegister({...register, [event.target.name]: event.target.value});
    }
    return(
        <div>
            <h1>Register Page</h1>
            <div className='space'>
                <label className='register-label'>Enter Your Name :</label>
                <input type="text" placeholder="Enter your name" className={formError.userName ? "register-input input-error" : "register-input"} onChange={handleInput} name='userName'/>
                {formError.userName && <p className='error'>Please enter a valid user name</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Enter Your Email ID :</label>
                <input type="text" placeholder="Enter Your Email ID"  className={formError.emailId ? "register-input input-error" : "register-input"} onChange={handleInput} name='emailId'/>
                {formError.emailId && <p className='error'>Please enter a valid Email ID</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Enter Your Password :</label>
                <input type="password" placeholder="Enter Your Password"  className={formError.password ? "register-input input-error" : "register-input"} onChange={handleInput} name='password'/>
                {formError.password && <p className='error'>Please enter a valid Password</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Select Your DOB : </label>
                <input type="date"   className={formError.dateOfBirth ? "register-input input-error" : "register-input"} onChange={handleInput} name='dateOfBirth'/>
                {formError.dateOfBirth && <p className='error'>Please enter a Date Of Birth</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Select Your Gender : </label>
                <input type="radio" name='gender'  onChange={handleInput} value="Male" />Male

                <input type="radio" name='gender'  onChange={handleInput} value="Female"/>Female

                <input type="radio" name='gender' onChange={handleInput} value="others"/>Others

                {formError.gender && <p className='error'>Please Select Anyone Gender</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Select Your Hobbies : </label>
                <input type="checkbox" onChange={handleInput} value="cricket" name='hobbies'/>Cricket
                <input type="checkbox" onChange={handleInput} value="Badminton" name='hobbies'/>Badminton
                <input type="checkbox" onChange={handleInput} value="Football" name='hobbies'/>Football
                {formError.hobbies && <p className='error'>Please Select Anyone Hobbies</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Enter Your Address</label>
                <textarea name='address' placeholder='Enter your address'  className={formError.userName ? "register-input input-error" : "register-input"} onChange={handleInput}></textarea>

                {formError.address && <p className='error'>Please enter a valid address</p>}
            </div>
            <div className='space'>
                <label className='register-label'>Select your Highest Qualification :</label>
                <select  className={formError.userName ? "register-input input-error" : "register-input"} defaultValue={""} onChange={handleInput} name='qualification'>
                    <option disabled value="">Please select your qualification</option>
                    <option>Under Graduate</option>
                    <option>Post Graduate</option>
                    <option>Engineering Degree</option>
                    <option>Diploma Degree</option>
                    <option>Masters Degree</option>
                </select>
                {formError.qualification && <p className='error'>Please Select Anyone Qualification</p>}
            </div>
            <div className='space'>
                <button onClick={()=> submitRegister()}>Create Your Account</button>
            </div>
        </div>
    )
}
export default RegisterPage;