const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 128,
	},
});
//salt and hash password before saving it in database
userSchema.pre("save", function (next) {
	const user = this;
	if (!user.isModified("password")) {
		return next;
	}
	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});
//compares password provided by the user with the one stored in database, rejects if not equal, resolve is equal
userSchema.methods.comparePassword = function (candidatePassword) {
	const user = this;
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) return reject(err);
			if (!isMatch) return reject(err);
			resolve(true);
		});
	});
};

mongoose.model("User", userSchema);