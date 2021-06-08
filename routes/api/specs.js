const express = require("express");
const router = express.Router();

const Spec = require("../../models/Spec");

router.get("/", (req, res) => {
  Spec.find()
  .then((spec) => {
    res.status(200).send(spec);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = router;
