import React, { useEffect, useState } from "react";
import API from "../utils/API";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../redux/auth";
function MyListings() {
	// Setting our component's initial state
	const [properties, setProperties] = useState([]);
	const dispatch = useDispatch();
	// Load all properties and store them with setProperties
	useEffect(() => {
		loadProperties();
	}, []);
	// Loads all properties and sets them to properties
	function loadProperties() {
		API.getMyPropertyList()
			.then((res) => {
				console.log({ res });
				setProperties(res.data);
			})
			.catch((err) => console.log(err));
	}
	const handleBtnClick = (property) => {
		// API to save the favorite property to the database
		API.deleteProperty(property.listing_id).then((result) => {
			const updateList = properties.filter(
				(value) => value.listing_id !== property.listing_id
			);
			setProperties(updateList);
			dispatch(removeFavorite(property.listing_id));
		});
	};
	return (
		<Container align="center" maxWidth={false}>
			<section className="display">
				<h1>My Listing</h1>
				<Grid container spacing={3}>
					{properties.map((property, index) => (
						<Grid key={index} item xs={12} md={6} lg={3}>
							<PropertyCard
								property={property}
								onClick={() => handleBtnClick(property)}
								onListing={true}
							/>
						</Grid>
					))}
				</Grid>
			</section>
		</Container>
	);
}
export default MyListings;
