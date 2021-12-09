import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import NavBar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import Logout from './components/Logout';
import Buddy from './components/Buddy';
import Tutorials from './components/Tutorials';
import Gyms from './components/Gyms';
import DisplayVideo from './components/DisplayVideo';
import React, {useState, useEffect} from 'react';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          loggedInUser: null,
          videoId: '',
          videos: [],
         
      };
  }

  registerNewUser = async (user) => {
      console.log("User object from Register: ", user)
      try{
          const response = await axios.post('https://localhost:44394/api/authentication', user);
          console.log(response)
          this.loggedInUser = ({'userName': user.userName, 'password': user.password})

      }
      catch(error) {
          console.log(error, 'Invalid input');
      }
  }

  componentDidMount() {
     this.getVideos('exercise tutorial');
  }
  getVideos = async (searchTerm) => {
      let response = await axios.get()
      console.log('videos', response.data.items)
      this.setState({
          videoId: response.data.items[0].id.videoId,
          videos: response.data.items
      });
  }
  
  async makeLoginRequest(logInfo){
      try{

          let userInfo = logInfo;
          let response = await axios.post('https://localhost:44394/api/authentication/login', userInfo);

          localStorage.setItem('token', response.data.token);
          window.location = '/';
          return localStorage;
      }
      catch(ex){
          console.log("bad call")
      }
  } 
  render(){
    const user = this.state.user;
    return(
        <div>
           <div>
               <DisplayVideo videoId={this.state.videoId}/>
                <NavBar user={user} />
                <Routes>
                    <Route path='/register' element={<RegisterForm />} /> 
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/buddy' element={<Buddy/>} />
                    <Route path='/tutorials' element={<Tutorials/>} />
                    <Route path='/gyms' element={<Gyms/>} /> 
                </Routes>
                    
                  
            </div>
        </div>

    )
}
}
                    
                    
                    





export default App;
