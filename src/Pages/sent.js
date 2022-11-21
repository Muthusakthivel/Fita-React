import React, { Component } from 'react';
import axios from 'axios';

class SentPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            name : '',
            job : ''
        }
    }

    onHandleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onUpdate () {
       const url = "https://reqres.in/api/users/2";

       axios.put(url, this.state)
       .then((response) => {
        const serverData = response.data;
        console.log(serverData);
        alert("Updated User Profile Successfully");
       })
       .catch((error) => {
        console.log(error);
       })

    }
    render() {
        return(
            <div>
                <h1>This is a Sent Page</h1>
                <div>
                <label>Update Your Name</label>
                <input type="text" placeholder='Please Update Your Name'  onChange = {this.onHandleInput} name='name' />
               
                </div>
                <div>
                <label>Update Your Job Role</label>
                <input type="text" placeholder='Please Update Your Job Role' onChange = {this.onHandleInput} name='job' />
                
                </div>
                <button onClick={()=>this.onUpdate()}>Update profile</button>
            </div>
        )
    }
}
export default SentPage;