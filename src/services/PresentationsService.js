/*
 * Presentations service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * Create presentation
 * *
 * @param {Object} payload the json payload
 * @returns {Object} the list of presentations with pagination data
 */
// eslint-disable-next-line no-unused-vars
const createPresentation = async (payload) => {
  return getMockData("create-presentation.json");
};

/**
 * Get presentation by id
 * *
 * @param {string} id the presentation id
 * @returns {Object} the presentation object
 */
const getPresentation = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-presentation-by-id.json");
  }
};

module.exports = {
  createPresentation,
  getPresentation,
};
