// Packages installed: mongoose.

const mongoose = require("mongoose");

// see how I attached new database name below yytt
mongoose.connect(
  "mongodb+srv://abhi1123:HqRQ0k63YIILaq2z@cluster0.ujmwv.mongodb.net/fuelture?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
