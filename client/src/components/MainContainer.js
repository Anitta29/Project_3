import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "./Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchArea from "./SearchArea";
import API from "../utils/API";
import PropertyDetail from "./PropertyDetail";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		// padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

function MainContainer() {
	const classes = useStyles();
	const [search, setSearch] = useState({
		state: "NY",
		city: "Manhattan",
		result: [],
	});

	const handleInputChange = (event) => {
		const { value, name } = event.target;

		console.log(event.target);

		console.log(value, name);
		setSearch((state) => ({
			...state,
			[name]: value,
		}));
	};

	const searchMovies = (state, city) => {
		API.search(state, city).then((result) => {
			console.log(result);
			const propertyWithImage = result.data.filter(
				(property) => property.thumbnail
			);
			setSearch((state) => ({ ...state, result: propertyWithImage }));
		});
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		searchMovies(search.state, search.city);
	};

	useEffect(() => {
		API.search(search.state, search.city).then((result) => {
			const propertyWithImage = result.data.filter(
				(property) => property.thumbnail
			);

			setSearch((state) => ({
				...state,
				result: propertyWithImage.slice(0, 4),
			}));
		});
	}, []);
	return (
		<Container>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>xs=12</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<SearchArea
								state={search.state}
								city={search.city}
								handleInputChange={handleInputChange}
								handleFormSubmit={handleFormSubmit}
							/>
						</Paper>
					</Grid>

					{search.result.map((property, index) => (
						<Grid key={index} item xs={3}>
							<Paper className={classes.paper}>
								<PropertyDetail property={property} />
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
		</Container>
	);
}

export default MainContainer;
