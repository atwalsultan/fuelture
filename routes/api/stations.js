const express = require("express");
const router = express.Router();

// Import model
const Station = require("../../models/Station");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
    Station.find()
        .then((station) => {
            res.status(200).send(station);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;
