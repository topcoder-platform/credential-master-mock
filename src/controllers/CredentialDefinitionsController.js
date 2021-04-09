/*
 * CredentialDefinitions controller
 */

const credentialDefinitionsService = require("../services/CredentialDefinitionsService");

/**
 * Controller for GET /credentialdefinitions
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getCredentialDefinitions = async (req, res) => {
  const result = await credentialDefinitionsService.listCredentialDefinitions(
    req.query
  );

  res.status(200).send(result);
};

/**
 * Controller for GET /credentialdefinitions/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getCredentialDefinitionById = async (req, res) => {
  const id = req.params.id;

  const result = await credentialDefinitionsService.getCredentialDefinition(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getCredentialDefinitions,
  getCredentialDefinitionById,
};
