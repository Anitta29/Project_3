import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	favoriteIcon: {
		alignItems: "right",
		cursor: "pointer",
	},
}));

function PropertyDetail({ property, onFavoriteClick }) {
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
								.toFixed()
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
					<Button
						href={property.rdc_web_url}
						variant="outlined"
						color="primary"
					>
						More Info
					</Button>
					<FavoriteBorderIcon
						className={classes.favoriteIcon}
						size="small"
						color="primary"
						onClick={() => onFavoriteClick(property)}
					></FavoriteBorderIcon>
				</CardActions>
			</Card>
		</div>
	);
}

export default PropertyDetail;
