/*
 * Provide some common functions.
 */
const path = require("path");
const fs = require("fs");
const config = require("config");
const _ = require("lodash");

/**
 * Get mock json data from file system
 * @param {string} fileName the name of the mock data file
 * @returns {Object} the mock data
 */
const getMockData = (fileName) => {
  let rawData = fs.readFileSync(path.join(config.MOCK_DATA_PATH, fileName));
  return JSON.parse(rawData);
};

/**
 * Wrap async function to standard express function
 * @param {Function} fn the async function
 * @returns {Function} the wrapped function
 */
const wrapExpress = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
};

/**
 * Wrap all functions from object
 * @param obj the object (controller exports)
 * @returns {Object|Array} the wrapped object
 */
const autoWrapExpress = (obj) => {
  if (_.isArray(obj)) {
    return obj.map(autoWrapExpress);
  }
  if (_.isFunction(obj)) {
    if (obj.constructor.name === "AsyncFunction") {
      return wrapExpress(obj);
    }
    return obj;
  }
  _.each(obj, (value, key) => {
    obj[key] = autoWrapExpress(value);
  });
  return obj;
};

/**
 * Handle errors
 * @param {Object} err the error object
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @param {Function} next the next function to call
 * @returns
 */
const errorHandler = (err, req, res, next) => {
  // handle auth errors
  if (err.name === "UnauthorizedError") {
    res.status(401).send();
    return;
  }
  // handle joi errors
  if (err.name === "ValidationError") {
    if (err.isJoi) {
      res.status(400).send({ message: err.details[0].message });
    } else {
      res.status(400).send({ message: err.message });
    }
    return;
  }
  // handle errors from bodyParser
  if (err.statusCode === 400) {
    res.status(400).send({ message: err.message });
    return;
  }
  // handle internal errors
  res.status(500).send({ message: err.message });

  next();
};

/**
 * Handle auth (check if header is present)
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @param {Function} next the next function to call (not used in function, but required for express)
 * @returns
 */
const authHandler = (req, res, next) => {
  try {
    // if auth header is not present, throw error
    if (!req.headers["authorization"]) throw new Error();
  } catch (err) {
    next({
      name: "UnauthorizedError",
    });
    return;
  }
  next();
};

module.exports = {
  autoWrapExpress,
  getMockData,
  errorHandler,
  authHandler,
};
