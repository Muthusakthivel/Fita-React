import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/header';

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            userList : []
        }
    }
    componentDidMount(){
       this.onLoadAPI();
      }

    onLoadAPI(){
        const url = "https://reqres.in/api/users?page=2";
        axios.get(url)
        .then((response) => {
            let serverResult = response.data
            this.setState({
                userList : serverResult.data
            })
            console.log(serverResult.data);
            console.log(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    }
    render(){
        const user = this.state.userList.map((value, index)=> {
            return(
                <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                        <td>
                            <img src={value.avatar} />
                        </td>
                    </tr>
            )
        })
        return(
            <div>
                <Header></Header>
            <h1>This is a Home Page</h1>
            <NavLink to="/contact">Go to Contact Page</NavLink>
            <br/>
            <NavLink to="/login">Go For Login</NavLink>
            <br/>
            <button onClick={() => this.onLoadAPI()}>Trigger GET API</button>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                   {user}
                </tbody>
            </table>
            </div>
           
            
        )
    }
}
export default Home;