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
						<NavLink
							exact
							to="/about"
							activeStyle={{
								color: "#fff",
							}}
						>
							About
						</NavLink>
					</li>
					<li>
					<NavLink
							exact
							to="/login"
							activeStyle={{
								color: "#fff",
							}}
						>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
