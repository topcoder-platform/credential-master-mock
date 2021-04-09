/*
 * IssueGroups service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * List all issuegroups
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of issuegroups with pagination data
 */

// eslint-disable-next-line no-unused-vars
const listIssueGroups = async (query) => {
  return getMockData("get-issuegroups.json");
};

/**
 * Get issuegroup by id
 * *
 * @param {string} id the issuegroup id
 * @returns {Object} the issuegroup object
 */
const getIssueGroup = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-issuegroup-by-id.json");
  }
};

/**
 * Get issuegroup by id
 * *
 * @param {string} id the issuegroup id
 * @returns {Object} the issuegroup object
 */
// eslint-disable-next-line no-unused-vars
const getIssueGroupMembers = async (id) => {
  return getMockData("get-issuegroup-members-by-id.json");
};

module.exports = {
  listIssueGroups,
  getIssueGroup,
  getIssueGroupMembers,
};
