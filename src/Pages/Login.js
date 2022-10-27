import React, { Component } from 'react';

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }
    onHandleInput = (event) => {
        //Property Method
       // console.log(event.target.value, event.target.name);
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    onSubmit = () => {
        console.log(this.state)
    }
    render(){
        return (
            <div id='login-page'>
                <h1>Welcome to Login Page</h1>
                <img src={require("../Images/PB.jpg")} className="image"
                alt='' />
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/moneyheist5-1627916834.jpg" className="image" alt='sample'/>
                <div className='space-bottom'>
                    <label className='label'>Enter Your Email ID :</label>
                    <input className='input' type="email" placeholder='Please enter your email id...'
                    onChange={this.onHandleInput} name="username"/>
                </div>
                <div>
                <label className='label'>Enter Your Password :</label>
                <input className='input' type="password" placeholder='Please enter your Password...'
                onChange={this.onHandleInput} name="password"/>
                </div>
                <button onClick={() => this.onSubmit()}> Login </button>
                <div>
                <h4>Your email Id is {this.state.username}</h4>
                <h4>Your Password is {this.state.password}</h4>
                </div>
            </div>
        )
    }
}
export default LoginPage;