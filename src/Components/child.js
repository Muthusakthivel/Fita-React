import React, {Component} from 'react';

class ChildComponent extends Component {
    onHandleInput = (event) => {
        console.log(event.target.value);
        this.props.callback(event.target.value);
    }
    render() {
        console.log(this.props);
        return(
            <div>
                <h1>This is a child component</h1>
                <p> User Name : {this.props.information.name}</p>
                <p> User Age : {this.props.information.age}</p>
                <input type="text" placeholder='Enter a Value...' onChange={this.onHandleInput}  />
            </div>
        )
    }
}
export default ChildComponent;