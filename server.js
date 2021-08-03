const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");

// Import handlers for routes
const sales = require("./routes/api/sales");
const news = require("./routes/rss/news");
const specs = require("./routes/api/specs");
const incentives = require("./routes/api/incentives");
const teamMembers = require("./routes/api/members");
const stations = require("./routes/api/stations");
const milestones = require("./routes/api/milestones");
const contactForm = require("./routes/forms/contact");


// CORS
const cors = require("cors");
app.use(cors());

// For environment variables
require("dotenv").config();

// Connect to Mongo
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected!"))
	.catch((e) => console.log(e));

// Allow the request to be received as json
app.use(express.json());

// Middleware for routes
app.use("/api/sales", sales);
app.use("/rss/news", news);
app.use("/api/specs", specs);
app.use("/api/incentives", incentives);
app.use("/api/team-members", teamMembers);
app.use("/api/stations", stations);
app.use("/api/milestones", milestones);
app.use("/about", contactForm);

// For production environments
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
	app.use(express.static('./client/build'));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Specify port and listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("Server is up on " + port);
});
