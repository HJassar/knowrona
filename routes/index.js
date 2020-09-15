const express = require("express");
const router = express.Router();

// In Heroku, index will redirect to the react app
if (process.env.NODE_ENV !== "production") {
	router.get("/", (req, res) => {
		res.send("This page shows in dev mode only");
	});
}

module.exports = router;
