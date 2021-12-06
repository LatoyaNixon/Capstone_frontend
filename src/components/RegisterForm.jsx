import { render } from '@testing-library/react';
import axios from 'axios';
import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            phoneNumber: '',
        }
    }

    async registerRequest(userInfo) {
        userInfo = {
            firstName: userInfo.firstName,
            middleName: userInfo.middleName,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            password: userInfo.password,
            email: userInfo.email,
            phoneNumber: userInfo.phoneNumber
        }
        console.log(userInfo)
        try{
            let response = await axios.post('https://localhost:44394/api/authentication/', userInfo)
            window.location = '/login';
        }
        catch(ex){
            console.log("bad call", ex)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "number"? event.target.valueAsNumber : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.registerRequest(this.state);
    };


    render() {
        const firstName = this.state.firstName;
        const middleName = this.state.middleName;
        const lastName = this.state.lastName;
        const userName = this.state.userName;
        const password = this.state.password;
        const email = this.state.email;
        const phoneNumber = this.state.phoneNumber;
        return (
            <div class="RegisterForm">
                <h3>Register For An Account Here!</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input class="m-2" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={this.handleChange} />
                    <input class="m-2" name="middleName" type="text" placeholder="Middle Name" value={firstName} onChange={this.handleChange} />
                    <input class="m-2" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={this.handleChange} />  
                    <br />
                    <input class="m-2" name="userName" type="text" placeholder="User Name" value={userName} onChange={this.handleChange} />  
                    <input class="m-2" name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} />  
                    <br />
                    <input class="m-2" name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} />  
                    <input class="m-2" name="phoneNumber" type="tel" placeholder="Phone Number" value={phoneNumber} onChange={this.handleChange} />  
                    <br />

                    <input id="newUserButton" name="submit" type="Submit" value="Complete Registration" className="btn btn-secondary m-2" />
                </form> 
            </div>
        );
    }
}


export default RegisterForm;