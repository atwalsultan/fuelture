const express = require("express");
const router = express.Router();

const Station = require("../../models/Station");

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
