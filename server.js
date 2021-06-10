const express = require("express");
const mongoose = require("mongoose");

const sales = require("./routes/api/sales")
const articles = require('./routes/rss/articles')
const specs = require("./routes/api/specs")
const incentives = require("./routes/api/incentives")

const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config()

// Connect to Mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected!'))
  .catch((e) => console.log(e))
  
// Allow the request to be received as json
app.use(express.json());
app.use('/api/sales', sales);
app.use('/rss/articles', articles)
app.use('/api/specs', specs)
app.use('/api/incentives', incentives)

const port = process.env.PORT || 5000;
  
app.listen(port, () => {
  console.log("Server is up on " + port);
});
