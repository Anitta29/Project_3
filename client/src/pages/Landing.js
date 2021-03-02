import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../utils/API";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite, removeFavorite } from "../redux/auth";
import MyCarousel from "../components/Carousel/MyCarousel";

import "../App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "relative",
	},
	carousel: {
		position: "relative",
		marginBottom: 50,
	},
	SearchBar: {
		position: "absolute",
		top: "45%",
		width: "100%",
		zIndex: "3",
	},
	welcomeMessage: {
		color: "white",
		marginBotton: 20,
		fontFamily:
			"Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		fontWeight: "bold",
	},
}));
function Landing() {
	const classes = useStyles();
	const [search, setSearch] = useState({
		state: "NY",
		city: "Manhattan",
		result: [],
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const { authenticated } = useSelector((state) => state.auth);

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

	const handleBtnClick = (property, isRemoved) => {
		if (authenticated === false) {
			return history.push("/login");
		}
		if (isRemoved) {
			return API.deleteProperty(property.listing_id).then((result) => {
				alert("Property Removed!");
				dispatch(removeFavorite(property.listing_id));
			});
		}
		API.saveProperty(property).then((result) => {
			alert("Property Saved!");
			dispatch(setFavorite(property.listing_id));
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
		<Container align="center" maxWidth={false}>
			<section className="display">
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<div className={classes.carousel}>
								<MyCarousel />
								<div className={classes.SearchBar}>
									<Typography
										variant="h4"
										gutterBottom
										className={classes.welcomeMessage}
									>
										"Welcome to WOW Realtor! <br></br>To start select the
										desired location above."
									</Typography>
									<SearchBar
										state={search.state}
										city={search.city}
										handleInputChange={handleInputChange}
										handleFormSubmit={handleFormSubmit}
									/>
								</div>
							</div>

							<Grid container spacing={3}>
								{search.result.map((property, index) => (
									<Grid key={index} item xs={12} md={6} lg={3}>
										<PropertyCard
											property={property}
											onClick={handleBtnClick}
										/>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</div>
			</section>
		</Container>
	);
}
export default Landing;
