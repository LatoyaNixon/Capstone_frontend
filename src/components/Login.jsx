import axios from 'axios';
import react, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (event) => {
        this.setState.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit  = async (event) => {
        event.preventDefault();

        const login = {
            username: this.state.username,
            password: this.state.password,
        }
        try {
            console.log("loginin Body: ",login)
            let response = await axios.post('https://localhost:44394/api/authentication/login', login);
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
        }catch (err) {
            console.log("Api error with login:", err)
        }

        this.setState({
            username: '',
            password: '',
        });

    }

    render(){
        return(
            <div className="login">
            <div className="form">
            <form onSubmit={this.handleSubmit}>
            <div className="login-form">
            <div className="title">Welcome Back! Sign In </div>

            </div>
            <div className="input-field">
                    <label>Username</label>
                    <input type="text" name='username' id="typeUsernameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.username} required />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name='password' id="typePasswordX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.password} required />
                </div>
                <div className="button">
                    <input type="submit" />
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default Login;