import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../components/Login";
// import Section from "@material-ui/core/Section";

const useStyles = makeStyles((theme) => ({}));

function UserLogin() {
	return (
		<section className="display">
			<h1>Login</h1>
			<Login />
		</section>
	);
}

export default UserLogin;
