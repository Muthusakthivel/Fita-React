import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ContactPage extends Component {

    constructor(props){
    super(props);
    this.state = {
        username: "Mr.ABC"
    };
    console.log("Triggered --> Constructor Method");
  }
  componentWillMount(){
    console.log("Triggered --> ComponentWillMount Method");
  }
  componentDidMount(){
    console.log("Triggered --> ComponentDidMount Method");
  }

  onChangeUser(){
    this.setState({
        username : "Miss.Xyz"
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState);
    return true;
  }

  componentWillUpdate(){
    console.log("Triggered --> componentWillUpdate Method");
  }
  componentDidUpdate(){
    console.log("Triggered --> componentDidUpdate Method");
  }

  componentWillUnmount(){
    console.log("Triggered --> componentWillUnmount Method");
  }
  
    render() {
        console.log("Triggered --> Render Method");
        return(
            <div>
            <h1>This is a Contact Page</h1>
            <h1>Welcome, {this.state.username}</h1>
            <button onClick={()=>this.onChangeUser()}>Change User</button>
            <NavLink to="/">Go Back</NavLink>
            </div>
        )
    }
}
export default ContactPage;