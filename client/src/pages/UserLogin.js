import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../components/Login";

// const useStyles = makeStyles((theme) => ({}));

function UserLogin() {
	return (
		<section className="twitter">
			<h1>Log in</h1>
			<Login /> 

			
		</section>
	);
}

export default UserLogin;
