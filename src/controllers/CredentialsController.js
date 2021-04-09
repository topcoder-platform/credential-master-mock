/*
 * Credentials controller
 */

const Joi = require("joi");
const credentialsService = require("../services/CredentialsService");

/**
 * Controller for POST /credentials
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const postCredentials = async (req, res) => {
  Joi.attempt(req.body, postCredentials.schema);
  Joi.attempt(req.query, postCredentials.querySchema);

  const result = await credentialsService.createCredential(
    req.body,
    req.query.allornone,
    req.query.replace
  );

  res.status(200).send(result);
};
postCredentials.querySchema = Joi.object({
  allornone: Joi.boolean(),
  replace: Joi.boolean(),
});
postCredentials.schema = Joi.object({
  records: Joi.array().items(
    Joi.object({
      credentialDefinitionId: Joi.string().allow(null),
      connectionId: Joi.string().allow(null),
      state: Joi.string().valid("new", "built", "offered"),
      attributes: Joi.array().items(
        Joi.object({
          attributeName: Joi.string().allow(null),
          type: Joi.string().allow(null),
          textValue: Joi.string().allow(null),
        })
      ),
    })
  ),
});

/**
 * Controller for GET /credentials
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getCredentials = async (req, res) => {
  const result = await credentialsService.listCredentials(req.query);

  res.status(200).send(result);
};

/**
 * Controller for GET /credentials/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getCredentialById = async (req, res) => {
  const id = req.params.id;

  const result = await credentialsService.getCredential(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

/**
 * Controller for PATCH /credentials/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const patchCredentialById = async (req, res) => {
  Joi.attempt(req.query, patchCredentialById.querySchema);

  res.status(200).send();
};
patchCredentialById.querySchema = Joi.object({
  state: Joi.string().valid("build", "offer", "issue", "revoke").required(),
});

module.exports = {
  postCredentials,
  getCredentials,
  getCredentialById,
  patchCredentialById,
};
