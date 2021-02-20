import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "../components/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchArea from "../components/SearchArea";
import API from "../utils/API";
import PropertyDetail from "../components/PropertyDetail";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import Container from "@material-ui/core/Container";
// import UserLogin from "../components/UserLogin";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		// padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	welcomeMessage: {
		textAlign: "center",
	},
}));
function Landing() {
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

	const searchProperties = (state, city) => {
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
		searchProperties(search.state, search.city);
	};

	const handleBtnClick = (property) => {
		console.log("click", property);
		// API to save the favorite property to the database
		API.favorite(property).then((result) => {
			console.log(result);
		});
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
		
		<Container maxWidth={false}>
			{/* <UserLogin /> */}
			<section className="twitter">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography
								variant="h4"
								gutterBottom
								className={classes.welcomeMessage}
							>
								"Welcome to WOW Realtor! <br></br>To start select the desired
								location above."
							</Typography>
							<SearchArea
								state={search.state}
								city={search.city}
								handleInputChange={handleInputChange}
								handleFormSubmit={handleFormSubmit}
							/>
						</Paper>
					</Grid>

					{search.result.map((property, index) => (
						<Grid key={index} item xs={12} md={6} lg={3}>
							<Card className={classes.paper}>
								<PropertyDetail
									property={property}
									onFavoriteClick={handleBtnClick}
								/>
							</Card>
						</Grid>
					))}
				</Grid>
			</section>
		</Container>
	);
}
export default Landing;
