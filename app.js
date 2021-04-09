const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("config");
const cors = require("cors");

// create app
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

// import routes
require("./src/routes")(app);

// start server
app.listen(config.PORT, () => {
  console.log(`App is listening on port ${config.PORT}`);
});

module.exports = app;
