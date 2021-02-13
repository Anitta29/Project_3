import React from "react";
import Landing from "./pages/Landing";
import MyListings from "./pages/MyListings";
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
			</Router>
		</main>
	);
}

export default App;
