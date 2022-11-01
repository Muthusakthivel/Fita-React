import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isVisible: true,
      showPassword: false
    };
  }
  onHandleInput = (event) => {
    //Property Method
    // console.log(event.target.value, event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  showImage(){
    this.setState({
        isVisible: true
    })
  }
  
  hideImage(){
    this.setState({
        isVisible: false
    })
  }

  onSubmit = () => {
    console.log(this.state);
  };
  showPassword(status){
    this.setState({
      showPassword : status
    })
  }
  render() {
    let name = "Muthukumar";
    let roll_number = 142567;
    let student = {
      name: "Muthukumar",
      location: "Chennai",
      result: "Pass",
    };
    return (
      <div id="login-page">
        <h1>Welcome to Login Page</h1>
        <button onClick={() => this.showImage()}>Show Image</button>
        <button onClick={() => this.hideImage()}>Hide Image</button>
        {this.state.isVisible && (
          <div>
            <img src={require("../Images/PB.jpg")} className="image" alt="" />
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/moneyheist5-1627916834.jpg"
              className="image"
              alt="sample"
            />
          </div>
        )}
        <div className="space-bottom">
          <label className="label">Enter Your Email ID :</label>
          <input
            className="input"
            type="email"
            placeholder="Please enter your email id"
            onChange={this.onHandleInput}
            name="username"
          />
        </div>
        <div>
          <label className="label">Enter Your Password :</label>
          <input
            className="input"
            type="password"
            placeholder="Please enter your Password"
            onChange={this.onHandleInput}
            name="password"
          />
          { this.state.showPassword ? 
          <img src={require("../Images/eye-open.png")} className="icon" alt="eye-open"
          onClick={() => this.showPassword(false)} />
          :
          <img src={require("../Images/eye-close.png")} className="icon" alt="eye-close" 
          onClick={() => this.showPassword(true)} /> }
  
        </div>
        <button onClick={() => this.onSubmit()}> Login </button>
        <div>
          <h4>Your email Id is {this.state.username}</h4>
          <h4>Your Password is {this.state.password}</h4>
        </div>
        <h4>{name}</h4> {/*{Element Variable}*/}
        <h4>{roll_number}</h4> {/*{Element Variable}*/}
        <h4>
          {student.location} -- {student.name}
        </h4>{" "}
        {/*{Element Variable}*/}
      </div>
    );
  }
}
export default LoginPage;
