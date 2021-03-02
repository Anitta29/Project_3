import React, { useEffect } from "react";
import Landing from "./pages/Landing";
import MyListings from "./pages/MyListings";
import About from "./pages/About";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import Sidebar from "./components/SideBar/SideBar";
// import UserLogin from "./pages/UserLogin";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuth } from "./redux/auth";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, []);
	return (
		<main className="main">
			<Router>
				<Sidebar />

				<Route exact path="/" component={Landing} />
				<Route exact path="/listings" component={MyListings} />
				<Route exact path="/about" component={About} />
				<Route exact path="/login" component={UserLogin} />
				<Route exact path="/register" component={UserRegister} />
			</Router>
		</main>
	);
}

export default App;
