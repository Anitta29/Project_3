import React from "react";
import MainContainer from "./components/MainContainer";
import Landing from "./pages/Landing";
import MyListings from "./pages/MyListings";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<main class="main">
			<Router>
				<Sidebar />

				<Route exact path="/" component={Landing} />
				<Route exact path="/listings" component={MyListings} />
			</Router>
		</main>
	);
}

export default App;
