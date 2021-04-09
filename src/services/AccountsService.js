/*
 * Accounts service
 */
const config = require("config");
const { getMockData } = require("../common/utils");

/**
 * List all accounts
 * *
 * @param {Object} query the query params object
 * @returns {Object} the list of accounts with pagination data
 */

// eslint-disable-next-line no-unused-vars
const listAccounts = async (query) => {
  return getMockData("get-accounts.json");
};

/**
 * Get account by id
 * *
 * @param {string} id the account id
 * @returns {Object} the account object
 */
const getAccount = async (id) => {
  if (id !== config.NOT_FOUND_ID) {
    return getMockData("get-account-by-id.json");
  }
};

module.exports = {
  listAccounts,
  getAccount,
};
