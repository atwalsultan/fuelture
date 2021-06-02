const express = require("express");
const router = new express.Router();
const Sale = require("../models/Sale");

router.get("/sales", (req, res) => {
  Sale.find({})
    .then((figure) => {
      res.status(200).send(figure);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
