import React, { Component } from "react";
import Container from "./Container";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

class MainContainer extends Component {
	render() {
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
									state={this.state.state}
									city={this.state.city}
									handleInputChange={this.handleInputChange}
									handleFormSubmit={this.handleFormSubmit}
								/>
							</Paper>
						</Grid>

						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
					</Grid>
				</div>
			</Container>
		);
	}
}

export default MainContainer;
