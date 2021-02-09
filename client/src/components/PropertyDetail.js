import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	media: {
		height: 140,
	},
}));

function PropertyDetail({ property }) {
	console.log(property);
	const classes = useStyles();
	return (
		<div className="text-center">
			<CardMedia
				  className={classes.media}
				image={property.thumbnail}
			/>
			<h3>Beds: {property.beds}</h3>
			<h3>Baths: {property.baths}</h3>
			<h3>Price: ${property.price}</h3>
			<h3>Sqft: {property.lot_size?.size || 0} sqft</h3>
			<h3>
				Address: {property.address.line}, {property.address.city},{" "}
				{property.address.state_code} {property.postal_code}
			</h3>
		</div>
	);
}

export default PropertyDetail;
