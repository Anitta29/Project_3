import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchArea from "../components/SearchArea";
import API from "../utils/API";
import PropertyDetail from "../components/PropertyDetail";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function MyListings() {
	return (
		<section className="twitter">
			<h1>My Listing</h1>
		</section>
	);
}

export default MyListings;
