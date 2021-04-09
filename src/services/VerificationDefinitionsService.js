/*
 * VerificationDefinitions service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * List all verificationdefinitions
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of verificationdefinitions with pagination data
 */
// eslint-disable-next-line no-unused-vars
const listVerificationDefinitions = async (query) => {
  return getMockData("get-verificationdefinitions.json");
};

/**
 * Get verificationdefinition by id
 * *
 * @param {string} id the verificationdefinition id
 * @returns {Object} the verificationdefinition object
 */
const getVerificationDefinition = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-verificationdefinition-by-id.json");
  }
};

module.exports = {
  listVerificationDefinitions,
  getVerificationDefinition,
};
