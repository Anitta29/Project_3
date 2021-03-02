import React, { useState } from "react";
import { MenuList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import UserWelcome from "../UserWelcome/UserWelcome";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/auth";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import WorkIcon from "@material-ui/icons/Work";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexGrow: 1,
	// 	position: "relative",
	// 	zIndex: 2,
	// },

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	desktopBtn: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},

	root: {
		flexGrow: 1,
		backgroundColor: "red",
	},

	title: {
		flexGrow: 1,
	},
	drawer: {
		width: 300,
		background: "#312450",
	},
	fullList: {
		width: "auto",
	},
	linkColor: {
		color: "white",
	},
	iconStyle: {
		color: "white",
	},
	socialIcons: {
		textAlign: "justify",
	},
	outlined: {
		"&:hover": {
			backgroundColor: "#35C37D",
		},
	},
	toolBar: {
		backgroundColor: "#5e42a6",
	},
	loginToolBar: {
		textAlign: "right",
		listStyle: "none",
		width: "100%",
		textDecoration: "none",
	},
}));

function NavTabs({ onToggle }) {
	const { authenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = (open) => () => {
		setIsOpen(open);
	};
	const handleLogout = async (event) => {
		event.preventDefault();
		dispatch(logout());
		history.push("/login");
	};

	return (
		<div>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar className={classes.toolBar}>
						<IconButton
							onClick={toggleDrawer(true)}
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						{authenticated === true && (
							<li className={classes.loginToolBar}>
								<UserWelcome />
								<Link href="#" onClick={handleLogout}>
									Logout
								</Link>
							</li>
						)}
						<div className={classes.desktopBtn}>
							{/* <Button variant="containedPrimary" component={Link} to="/">
								HOME
							</Button>

							<Button variant="containedPrimary" component={Link} to="/about">
								ABOUT
							</Button>

							<Button variant="containedPrimary" component={Link} to="/contact">
								CONTACT
							</Button>

							<Button
								variant="containedPrimary"
								component={Link}
								to="/portifolio"
							>
								PORTIFOLIO
							</Button> */}
						</div>
					</Toolbar>
				</AppBar>
			</div>

			<Drawer
				classes={{ paper: classes.drawer }}
				open={isOpen}
				onClose={toggleDrawer(false)}
			>
				<div
					className={classes.fullList}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<MenuList>
						<List className={classes.linkColor}>
							<ListItem button component={Link} to="/">
								<ListItemIcon>
									<HomeIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"HOME"} />
							</ListItem>
							<hr></hr>
							<ListItem button component={Link} to="/about">
								<ListItemIcon>
									<PersonIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"ABOUT"} />
							</ListItem>
							<hr></hr>
							{authenticated === false && (
								<ListItem button component={Link} to="/login">
									<ListItemIcon>
										<VpnKeyIcon className={classes.iconStyle} />
									</ListItemIcon>
									<ListItemText primary={"Login"} />
								</ListItem>
							)}
							{authenticated === true && (
								<ListItem button component={Link} to="#" onClick={handleLogout}>
									<ListItemIcon>
										<ExitToAppIcon className={classes.iconStyle} />
									</ListItemIcon>
									<ListItemText primary={"Logout"} />
								</ListItem>
							)}
							<hr></hr>
						</List>
					</MenuList>
				</div>
			</Drawer>
		</div>
	);
}

export default NavTabs;
