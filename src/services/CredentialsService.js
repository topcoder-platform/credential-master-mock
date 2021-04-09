/*
 * Credentials service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * Create credential
 * *
 * @param {string} payload the json payload
 * @param {boolean} allornone the all or none value, defaults to false
 * @param {boolean} replace the replace value, defaults to false
 * @returns {Object} the credential object
 */
// eslint-disable-next-line no-unused-vars
const createCredential = async (payload, allornone=false, replace=false) => {
  return getMockData("create-credential.json");
};

/**
 * List all credentials
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of credentials with pagination data
 */

// eslint-disable-next-line no-unused-vars
const listCredentials = async (query) => {
  return getMockData("get-credentials.json");
};

/**
 * Get credential by id
 * *
 * @param {string} id the credential id
 * @returns {Object} the credential object
 */
const getCredential = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-credential-by-id.json");
  }
};

module.exports = {
  listCredentials,
  getCredential,
  createCredential,
};
