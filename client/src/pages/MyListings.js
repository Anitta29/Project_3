import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));

function MyListings() {
	return (
		<Container>
			<section className="display">
				<h1 >My Listing</h1>
			</section>
		</Container>
	);
}

export default MyListings;
