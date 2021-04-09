/*
 * Accounts controller
 */

const accountsService = require("../services/AccountsService");

/**
 * Controller for GET /accounts
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getAccounts = async (req, res) => {
  const result = await accountsService.listAccounts(req.query);

  res.status(200).send(result);
};

/**
 * Controller for GET /accounts/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getAccountById = async (req, res) => {
  const id = req.params.id;

  const result = await accountsService.getAccount(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getAccounts,
  getAccountById,
};
