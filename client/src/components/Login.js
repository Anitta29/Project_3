import React, { useState } from "react";
import axios from "axios";
import {login, setEmail, setPassword} from "../redux/auth"
import {useSelector, useDispatch} from 'react-redux'
import { SatelliteTwoTone } from "@material-ui/icons";

function Login() {
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [token, setToken] = useState("");
	// const [authenticated, setAuthenticated] = useState(false);
const {email, password, errorMessage} = useSelector((state) => state.auth ) 
const dispatch = useDispatch()
	// useEffect(() => {
	//     axios.get('./signup').then(data => console.log(data))
	// }, [])

	// function logUser(e) {
	// 	e.preventDefault()
	// 	console.log(email, password)
	// 	axios.post("/signin", { email: email, password: password });
	// }
	return (
		<React.Fragment>
			<input
				label="Type your email"
				type="email"
				validate
				value={email}
				onChange={(e) => dispatch(setEmail(e.target.value))}
			/>
			<input
				label="Type your password"
				type="password"
				validate
				value={password}
				onChange={(e) => dispatch(setPassword(e.target.value))}
			/>
			{errorMessage === "" ? null : (
				<p>{errorMessage}</p>
			)}
			<input type="submit" value="Login" onClick={() => dispatch(login({email, password}))} />
			<p>Hello {email}</p>
		</React.Fragment>
	);
}

export default Login;
