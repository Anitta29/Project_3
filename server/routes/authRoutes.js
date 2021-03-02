const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
	const { email, password, name } = req.body;
	try {
		const user = new User({ email, password, name });
		await user.save();
		const token = jwt.sign({ userId: user._id, name }, "MY_SECRET_KEY");
		res.send({ token });
	} catch (err) {
		return res.status(422).send(err.message);
	}
});

// on submit from the login page will send request to this API
router.post("/signin", async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);

	if (!email || !password) {
		//if no email or password provided, return error
		return res.status(422).send({ error: "Must provide email and password" });
	}

	//find user with thi email
	const user = await User.findOne({ email });
	if (!user) {
		//if no user with this email found, return error
		return res.status(422).send({ error: "Invalid password or email" });
	}

	//compare passwords
	try {
		// if success, generate token with user id
		await user.comparePassword(password);
		const token = jwt.sign(
			{ userId: user._id, name: user.name }, // data you want to add into the token
			"MY_SECRET_KEY" // secreit key need to match when you are validing the token, secret token can be put into ENVIRONMENT VARIABLE so it is not expose
		);
		console.log(token);
		res.send({ token });
	} catch (err) {
		//if not, return error
		return res.status(422).send({ error: "Invalid password or email" });
	}
});

module.exports = router;
