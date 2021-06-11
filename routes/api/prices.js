const express = require("express");
const router = express.Router();

const Price = require("../../models/Price");

router.get("/", (req, res) => {
  Price.find()
    .then((price) => {
      res.status(200).send(price);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
