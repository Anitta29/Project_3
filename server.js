//Anita
require('./models/User');
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./server/routes");
const app = express();
const PORT = process.env.PORT || 3001;
// var cors = require("cors");

//Anita
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view

// app.use(routes);

//Anita
app.use(authRoutes);

app.get("/loggedin", requireAuth ,(req, res) => {
	res.send(`Hey you`);
});

app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
