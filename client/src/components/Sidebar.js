import { NavLink } from "react-router-dom";
function Sidebar() {
	return (
		<aside className="sidebar">
			<nav className="nav">
				<ul>
					<li>
						<NavLink
							to="/"
							exact
							activeStyle={{
								color: "#fff",
							}}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to="/listings"
							activeStyle={{
								color: "#fff",
							}}
						>
							My Listings
						</NavLink>
					</li>
					<li>
						<a href="#">ABOUT </a>
					</li>
					<li>
						<a href="#">LOGIN</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
