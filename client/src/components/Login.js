import React, { useState } from "react";
import axios from "axios";
import { login, setEmail, setPassword } from "../redux/auth";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { SatelliteTwoTone } from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
		textAlign: "center",
		backgroundColor: "white",
		color: "black",
		marginTop: 10,
		alignItems: "center",
		paddingTop: 40,
		paddingBottom: 40,
	},
	CardContent: {
		backgroundColor: "red",
		color: "black",
		// boxShadow: "2.5px 5px 4px #000000"
	},
	input: {
		marginTop: 10,
	},
}));

function Login() {
	const classes = useStyles();

	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [token, setToken] = useState("");
	// const [authenticated, setAuthenticated] = useState(false);
	const { email, password, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	// useEffect(() => {
	//     axios.get('./signup').then(data => console.log(data))
	// }, [])

	// function logUser(e) {
	// 	e.preventDefault()
	// 	console.log(email, password)
	// 	axios.post("/signin", { email: email, password: password });
	// }
	return (
		<Container>
			<section className="display">
				<Card className={classes.root}>
					<CardContent>
						<React.Fragment>
							<TextField
								className={classes.input}
								label="Type your email"
								type="email"
								variant="outlined"
								id="outlined-basic"
								validate
								value={email}
								onChange={(e) => dispatch(setEmail(e.target.value))}
							/>
							<TextField
								className={classes.input}
								label="Type your password"
								type="password"
								id="outlined-basic"
								variant="outlined"
								validate
								value={password}
								onChange={(e) => dispatch(setPassword(e.target.value))}
							/>
							{errorMessage === "" ? null : <p>{errorMessage}</p>}

							<Button
								className={classes.input}
								type="submit"
								value="Login"
								variant="contained"
								color="primary"
								onClick={() => dispatch(login({ email, password }))}
							>
								Primary
							</Button>
						</React.Fragment>{" "}
					</CardContent>
				</Card>
				<h5>Hello {email}</h5>
			</section>
		</Container>
	);
}

export default Login;
