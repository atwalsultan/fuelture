const express = require("express");
const app = express();
const cors = require("cors");
require("./db/mongoose");
const saleRouter = require("./routers/sales");

const port = process.env.PORT || 5000;

app.use(cors());

// allow the request to be received as json
app.use(express.json());
app.use(saleRouter);

app.listen(port, () => {
  console.log("Server is up on " + port);
});
