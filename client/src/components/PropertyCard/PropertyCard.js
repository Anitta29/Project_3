import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import InfoButton from "@material-ui/core/Button";
import NotFavoritedIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Delete from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { markAsViewed } from "../../redux/auth";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		height: 450,

		backgroundColor: "#312450",
		color: "white",
		size: 10,
		fontFamily: "",
	},
	media: {
		height: 140,
		color: "white",
	},
	NotFavoritedIcon: {
		alignItems: "right",
		cursor: "pointer",
		color: "white",
	},
	favoriteIcon: {
		alignItems: "right",
		cursor: "pointer",
		color: "#F65959",
	},
	trashCan: {
		cursor: "pointer",
		color: "white",
		alignItems: "right",
	},

	Button: {
		color: "white",
	},
	PropertyCard: {
		marging: 0,
	},
	checkedProperty: {
		position: "absolute",
		top: 5,
		right: 5,
		color: "#24b527",
	},
}));

function PropertyCard({ property, onClick, onListing }) {
	console.log(property, "property card here");
	const classes = useStyles();
	const dispatch = useDispatch();
	const { favorite, propertyViewed } = useSelector((state) => state.auth);
	const isFavorite = favorite.indexOf(property.listing_id) > -1;
	const hasViewed = propertyViewed.indexOf(property.listing_id) > -1;

	console.log("******************** propertyViewed **********************");
	console.log(propertyViewed);

	// ***************** Mark as viewed Feature
	const handleMoreClick = () => {
		dispatch(markAsViewed(property.listing_id));
	};
	return (
		<Card align="center" className={classes.root}>
			<CardActionArea>
				{hasViewed === true && (
					<CheckCircle className={classes.checkedProperty} />
				)}
				<CardMedia className={classes.media} image={property.thumbnail} />
				<CardContent>
					<h3>Beds: {property.beds}</h3>
					<h3>Baths: {property.baths}</h3>
					<h3>
						Price: $
						{property.price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
					</h3>
					<h3>Size: {property.building_size?.size || 0} sqft</h3>
					<h3>
						Address: {property.address.line}, {property.address.city},{" "}
						{property.address.state_code} {property.postal_code}
					</h3>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<InfoButton
					className={classes.Button}
					href={property.rdc_web_url}
					variant="outlined"
					onClick={() => handleMoreClick()}
				>
					More Info
				</InfoButton>
				{onListing && (
					<Delete
						className={classes.trashCan}
						size="small"
						color="primary"
						onClick={() => onClick(property)}
					>
						Delete
					</Delete>
				)}
				{!onListing && isFavorite === false && (
					<NotFavoritedIcon
						className={classes.NotFavoritedIcon}
						size="small"
						color="primary"
						onClick={() => onClick(property)}
					></NotFavoritedIcon>
				)}
				{!onListing && isFavorite === true && (
					<FavoriteIcon
						className={classes.favoriteIcon}
						size="small"
						color="primary"
						onClick={() => {
							onClick(property, "remove");
						}}
					></FavoriteIcon>
				)}
			</CardActions>
		</Card>
	);
}

export default PropertyCard;
