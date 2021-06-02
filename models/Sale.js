const mongoose = require("mongoose");

const Sale = mongoose.model("Sale", {
  Ref_Date: {
    type: Date,
    required: true,
  },

  GEO: {
    type: String,
    required: true,
  },

  "Fuel type": {
    type: String,
    required: true,
  },

  "Vehicle type": {
    type: String,
    required: true,
  },

  VALUE: {
    type: Number,
    required: true,
  },
});

module.exports = Sale;
