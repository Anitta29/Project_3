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
			{ userId: user._id, name: user.name },
			"MY_SECRET_KEY"
		);
		console.log(token);
		res.send({ token });
	} catch (err) {
		//if not, return error
		return res.status(422).send({ error: "Invalid password or email" });
	}
});

module.exports = router;
