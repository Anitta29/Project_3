const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");
var cors = require("cors");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// TODO: move this get route to routes file
app.get("/api/search/:state/:city", (req, res) => {
	var options = {
		method: "GET",
		url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
		params: {
			city: req.params.city,
			limit: "50",
			offset: "0",
			state_code: req.params.state,
			sort: "relevance",
		},
		headers: {
			"x-rapidapi-key": "0847fb780bmshb3d33167dbb4ba6p158eecjsn85a782bf4d33",
			"x-rapidapi-host": "realtor.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			res.json(response.data.properties);
		})
		.catch(function (error) {
			console.error(error);
			res.status(500).json(error.data);
		});
});

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
