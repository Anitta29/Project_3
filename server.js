require("./server/models/User");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./server/routes/property");
const app = express();
const PORT = process.env.PORT || 3001;

var cors = require("cors");

//Anita
const authRoutes = require("./server/routes/authRoutes");
if (process.env.NODE_ENV === "production") {
}
// Add routes, both API and view
// app.use(routes);
app.use(authRoutes);
app.get("/loggedin", requireAuth, (req, res) => {
    res.send(`Hey you`);
});
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WowRealtor");
// Start the API server
app.listen(PORT, function () {
    console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});