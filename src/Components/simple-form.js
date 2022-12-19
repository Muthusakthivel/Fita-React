import React, {useState} from 'react';

// ES6
const SimpleFormSubmition = () => {

  let message = "Hi there, Good Morning!";
  let student = {
    name: 'MK',
    course: "Full Stack"
  }
  let username;

// useState Syntax

//  let [variableName, functionName] = useState(initialValue);
// let [userName, setUserName] = useState("");
let [loginForm, setLoginForm] = useState({
  username: "",
  password: ""
});

let [inlineCondition, setInlineCondition] = useState(true);
let [ifElseCondition, setIfElseCondition] = useState(false);
let [passwordVisibility, setPasswordVisibility] = useState(false);

  const onSubmitForm = () => {
   console.log(loginForm);
  }

  // const onHandleInput = (event) => {
  //   console.log(event);
  // };

  
  const onHandleInput = (event) => {
  //    setUserName(event.target.value);
  //   username = event.target.value
  //  console.log(username);
  //   console.log(event.target.value, event.target.name);
  setLoginForm({...loginForm, [event.target.id]: event.target.value});
  };

  const handleConditionRendering = (condition) => {
    setInlineCondition(condition);
  }

  const handleIfElseRendering = () => {
    let condition = !ifElseCondition;
    // alert(condition);
     setIfElseCondition(condition);
  }
  const handlePasswordVisibility = (condition) => {
    setPasswordVisibility(condition);
  }

  return(
    <div>
        <h1>{message}</h1>
        <h2>{student.course}</h2>
        <h2>The Username is {loginForm.username}</h2>
        <h2>The Password is {loginForm.password}</h2>
        <div className='space'>
            <label className='label'>Enter Your Username</label>
            <input type="text" placeholder='Please enter your username' onChange={onHandleInput} id="username"/>
        </div>
        <div className='space'>
            <label className='label'>Enter Your Password</label>
            <input type={passwordVisibility ? "text" : "password"} placeholder='Please enter your Password' onChange={onHandleInput} id="password"/>
            {passwordVisibility ? 
            <img src={require("../images/open-eye.png")} alt="open-eye" className='password-icon' onClick={()=>handlePasswordVisibility(false)}/> 
            :
             <img src={require("../images/close-eye.png")} alt="close-eye" className='password-icon' onClick={()=>handlePasswordVisibility(true)}/> }
            
            
        </div>
        <div className='space'>
            <button onClick={() => onSubmitForm()}>Submit Form</button>
        </div>
        <div>
          <h2>Conditional Rendering</h2>
          <button onClick={() => handleConditionRendering(true) }>Show Message</button>
          <button onClick={() => handleConditionRendering(false) }>Hide Message</button>

          {inlineCondition && <div>
            <h1>This is a Inline IF Condition</h1>
            <h1>I will be show & hide based on condition</h1>
            </div>}
            <div>
              <h1>Inline If-Else Condition</h1>
              <button onClick={() => handleIfElseRendering()}> Switch {ifElseCondition ? "ON" : "OFF"} </button>
              {ifElseCondition ?
                <img src='https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?w=2000' alt='color-bulb' style={{width : "100px"}}/> 
                :
              <img src='https://thumbs.dreamstime.com/b/light-bulb-11371329.jpg' alt='bulb' style={{width : "100px"}}/>
            }
            </div>
        </div>
    </div>
  )
}
export default SimpleFormSubmition;

// ES5
// function SimpleFormSubmition(){
//   return(
//     <div>

//     </div>
//   )
// }