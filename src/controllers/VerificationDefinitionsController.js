/*
 * VerificationDefinitions controller
 */

const verificationDefinitionsService = require("../services/VerificationDefinitionsService");

/**
 * Controller for GET /verificationdefinitions
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getVerificationDefinitions = async (req, res) => {
  const result = await verificationDefinitionsService.listVerificationDefinitions(
    req.query
  );

  res.status(200).send(result);
};

/**
 * Controller for GET /verificationdefinitions/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getVerificationDefinitionById = async (req, res) => {
  const id = req.params.id;

  const result = await verificationDefinitionsService.getVerificationDefinition(
    id
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getVerificationDefinitions,
  getVerificationDefinitionById,
};
