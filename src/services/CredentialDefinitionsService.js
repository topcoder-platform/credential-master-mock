/*
 * CredentialDefinitions service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * List all credentialdefinitions
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of credentialdefinitions with pagination data
 */

// eslint-disable-next-line no-unused-vars
const listCredentialDefinitions = async (query) => {
  return getMockData("get-credentialdefinitions.json");
};

/**
 * Get credentialdefinition by id
 * *
 * @param {string} id the credentialdefinition id
 * @returns {Object} the credentialdefinition object
 */
const getCredentialDefinition = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-credentialdefinition-by-id.json");
  }
};

module.exports = {
  listCredentialDefinitions,
  getCredentialDefinition,
};
