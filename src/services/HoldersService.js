/*
 * Holders service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * Create holder
 * *
 * @param {Object} payload the json payload
 * @param {boolean} allornone the all or none value, defaults to false
 * @returns {Object} the list of holders with pagination data
 */
// eslint-disable-next-line no-unused-vars
const createHolder = async (payload, allornone = false) => {
  return getMockData("create-holder.json");
};

/**
 * Get holder
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of holders with pagination data
 */
// eslint-disable-next-line no-unused-vars
const listHolders = async (query) => {
  return getMockData("get-holders.json");
};

/**
 * Get holder by id
 * *
 * @param {string} id the holder id
 * @returns {Object} the holder object
 */
const getHolder = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-holder-by-id.json");
  }
};

module.exports = {
  createHolder,
  listHolders,
  getHolder,
};
