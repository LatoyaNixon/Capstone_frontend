import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import NavBar from './NavBar/Navbar';
import RegisterForm from './Register/RegisterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,

    }
  }
}

registerNewUser = async (user) => {
  consoNamele.log("User object from Register:", user)
  try{
    const response = await axios.post('', user);
    console.log(response)
    this.loggedInUser = ({'userName': userName, 'password': user.password})
  }
  catch(error) {
    console.log(error, 'Invalid input');
  }
}

componentDidMount() {
  const jwt = localStorage.getItem('token');
  try{
    const user = jwt_decode(jwt);
    this.setState({
      user
    });
  } catch (err){
    console.log(err)
  }
  this.getProduct()
}

async makeLoginRequest(logInfo){
  try{

    let userInfo = logInfo;
    let response = await axios.post('', userInfo);

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
        <NavBar user={user} />
        <Routes>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='buddy' element={<Buddy />} />
          <Route path='tutorials' element={<Tutorials />} />
        </Routes>
      </div>
    </div>
  )
}




export default App;