/*
 * Default configuration.
 */
const path = require("path");

module.exports = {
  // port to run app on
  PORT: process.env.PORT || "3000",
  // api base string
  API_BASE: process.env.API_BASE || "/v1",
  // the local path to the folder where the mock data is located
  MOCK_DATA_PATH: process.env.MOCK_DATA_PATH || path.join(__dirname, "../data"),
  // the mock id that triggers 404 response
  NOT_FOUND_ID: process.env.NOT_FOUND_ID || "notfound",
};
