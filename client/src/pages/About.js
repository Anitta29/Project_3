import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import francisc from "./About/images/francis.png";
import alexs from "./About/images/alexs.png";
import anitas from "./About/images/anitas.png";
import erikimgs from "./About/images/erikimgs.png";
import ishas from "./About/images/ishas.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 225,
		textAlign: "center",
		backgroundColor: "#312450",
		color: "white",
	},
	media: {
		height: 140,
	},
	favoriteIcon: {
		cursor: "pointer",
		width: theme.spacing(3),
		height: theme.spacing(3),
		background: "#1D0F11",
		color: "white",
		padding: 10,
	},
	avatar: {
		// position: "absolute",
		// bottom: "50%",
		width: theme.spacing(20),
		height: theme.spacing(20),
		margin: theme.spacing(2),
	},
	CardActions: {
		display: "block",
	},
}));

function AboutUs(property, onFavoriteClick) {
	const classes = useStyles();

	return (
		<Container>
			<section className="display">
				<div class="title">
					<h1>Meet the Team</h1>
				</div>
				<Grid container spacing={4}>
					<Grid align="center" item xs={12} md={4} lg={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardContent>
									<h2>Francis</h2>
									<div className="img-size">
										<Avatar
											className={classes.avatar}
											src={francisc}
											alt="Francis"
										/>
									</div>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.CardActions}>
								<GitHubIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace("https://github.com/mrpagz")
									}
								></GitHubIcon>
								<LinkedInIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace(
											"http://www.linkedin.com/in/francis-roy-balasabas-21a5a5196"
										)
									}
								></LinkedInIcon>
							</CardActions>
						</Card>
					</Grid>

					<Grid align="center" item xs={12} md={4} lg={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardContent>
									<h2>Anitta</h2>
									<div className="img-size">
										<Avatar
											className={classes.avatar}
											src={anitas}
											alt="Anitta"
										/>
									</div>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.CardActions}>
								<GitHubIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace("https://github.com/Anitta29")
									}
								></GitHubIcon>
								<LinkedInIcon
									className={classes.favoriteIcon}
									onClick={() => window.location.replace("#")}
								></LinkedInIcon>
							</CardActions>
						</Card>
					</Grid>
					<Grid align="center" item xs={12} md={4} lg={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardContent>
									<h2>Erik Ulerio</h2>
									<div className="img-size">
										<Avatar
											className={classes.avatar}
											src={erikimgs}
											alt="Erik"
										/>
									</div>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.CardActions}>
								<GitHubIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace("https://github.com/Erikulerio")
									}
								></GitHubIcon>
								<LinkedInIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace(
											"https://www.linkedin.com/in/erik-ulerio-a58878b2"
										)
									}
								></LinkedInIcon>
							</CardActions>
						</Card>
					</Grid>

					<Grid align="center" item xs={12} md={4} lg={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardContent>
									<h2>Alex Fernandes</h2>
									<div className="img-size">
										<Avatar
											className={classes.avatar}
											src={alexs}
											alt="Alex Fernandes"
										/>
									</div>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.CardActions}>
								<GitHubIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace("https://github.com/aafernands")
									}
								></GitHubIcon>
								<LinkedInIcon
									className={classes.favoriteIcon}
									onClick={() =>
										window.location.replace(
											"https://www.linkedin.com/in/aafernands/"
										)
									}
								></LinkedInIcon>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</section>
		</Container>
	);
}

export default AboutUs;
