import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../components/Login";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));

function UserLogin() {
	return (
		<Container>
			<section className="display">
				<h1>Login</h1>
				<Login />
			</section>
		</Container>
	);
}

export default UserLogin;
