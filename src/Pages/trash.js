import React, { Component } from 'react';
import ChildComponent from '../Components/child';

class TrashPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : ''
        }
    }
    onReceiveValue = (value) => {
        console.log(value);
        this.setState({
            message : value
        })
    }
    render() {

        const data = {
            name: 'Mr.ABC',
            age: 23
        }
        return(
            <div>
                <h2>Received Username - {this.state.message}</h2>
                <ChildComponent information={data} callback={this.onReceiveValue}></ChildComponent>
            </div>
        )
    }
}
export default TrashPage;