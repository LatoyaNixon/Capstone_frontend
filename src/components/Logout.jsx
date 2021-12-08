import react from "react";
import { Link as RouterLink } from "react-router-dom";

function Logout() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = "/Nav/NavBar";

    return(
        <button onClick={this.logout}></button>
    )
    }
}

export default Logout;
