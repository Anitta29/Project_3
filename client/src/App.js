import React from "react";
import Landing from "./pages/Landing";
import MyListings from "./pages/MyListings";
import About from "./pages/About";
import UserLogin from "./pages/UserLogin";
import Sidebar from "./components/Sidebar";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<main className="main">
			<Router>
				<Sidebar />

				<Route exact path="/" component={Landing} />
				<Route exact path="/listings" component={MyListings} />
				<Route exact path="/about" component={About} />
				<Route exact path="/login" component={UserLogin} />
			</Router>
		</main>
	);
}

export default App;
