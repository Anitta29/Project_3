import React, {useEffect, useState} from "react";
import axios from 'axios';

function Userlogin() {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [token, setToken] = useState('');
const [authenticated, setAuthenticated] = useState(false)

// useEffect(() => {
//     axios.get('./signup').then(data => console.log(data))
// }, [])


function logUser (){
    // e.preventDefault()
    axios.post('./signup', { email: email, password: password})
}
    return(
        <React.Fragment>

            <input label="Type your email" type="email" validate value={email} onChange={(e) => setEmail(e.target.value)}  />
            <input label="Type your password" type="password" validate value={password} onChange={(e) => setPassword(e.target.value)}  />
            <input type="submit" value="Login" onClick={logUser()} />
        </React.Fragment>
    )
}

export default Userlogin;