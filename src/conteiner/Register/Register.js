import React, {Component} from "react";
import axios from "axios";

export default class Register extends Component{
    componentDidMount() {
        axios.get('https://login-73ee9.firebaseio.com/users.json').then(response => {
            console.log(response);
        })
    }

    render() {
        return(
            <div>
                <h1>Register</h1>
            </div>
        )
    }
}
