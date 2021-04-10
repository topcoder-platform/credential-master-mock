/*
 * Presentations controller
 */

const Joi = require("joi");
const presentationsService = require("../services/PresentationsService");

/**
 * Controller for GET /presentations
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const postPresentation = async (req, res) => {
  Joi.attempt(req.body, postPresentation.schema);
  // either verificationDefinitionId or accountId should be present
  if (!req.body["verificationDefinitionId"] && !req.body["accountId"]) {
    res.status(400).send({
      message: "Either verificationDefinitionId or accountId must be provided",
    });
    return;
  }

  const result = await presentationsService.createPresentation(req.body);

  res.status(200).send(result);
};
postPresentation.schema = Joi.object({
  holderIdentifier: Joi.string().required(),
  clientId: Joi.string().required(),
  callbackUrl: Joi.string().allow(null),
  verificationDefinitionId: Joi.string().allow(null),
  accountId: Joi.string().allow(null),
  persist: Joi.boolean().allow(null),
});

/**
 * Controller for GET /presentations/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getPresentationById = async (req, res) => {
  const id = req.params.id;

  const result = await presentationsService.getPresentation(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  postPresentation,
  getPresentationById,
};
