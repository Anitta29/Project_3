import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import IconButton from "@material-ui/icons/IconButton";

import { makeStyles } from "@material-ui/core/styles";
// import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	favoriteIcon: {
		alignItems: "right",
	},
}));

function PropertyDetail({ property }) {
	console.log(property);
	const classes = useStyles();
	return (
		<div className="text-center">
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={property.thumbnail} />
					<CardContent>
						<h3>Beds: {property.beds}</h3>
						<h3>Baths: {property.baths}</h3>
						<h3>
							Price: $
							{property.price
								.toFixed(2)
								.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
						</h3>
						<h3>Sqft: {property.lot_size?.size || 0} sqft</h3>
						<h3>
							Address: {property.address.line}, {property.address.city},{" "}
							{property.address.state_code} {property.postal_code}
						</h3>
					</CardContent>
				</CardActionArea>

				<CardActions>
					<Button variant="outlined" color="primary">
						Contact Agent
					</Button>
					

					<FavoriteBorderIcon
						className={classes.favoriteIcon}
						href="#contained-buttons"
						size="small"
						color="primary"
					></FavoriteBorderIcon>
				</CardActions>
			</Card>
		</div>
	);
}

export default PropertyDetail;
