/*
 * Schemas service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * List all schemas
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of schemas with pagination data
 */

// eslint-disable-next-line no-unused-vars
const listSchemas = async (query) => {
  return getMockData("get-schemas.json");
};

/**
 * Get schema by id
 * *
 * @param {string} id the schema id
 * @returns {Object} the schema object
 */
const getSchema = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-schema-by-id.json");
  }
};

module.exports = {
  listSchemas,
  getSchema,
};
