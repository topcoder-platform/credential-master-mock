/*
 * Holders controller
 */

const Joi = require("joi");
const holdersService = require("../services/HoldersService");

/**
 * Controller for POST /holders
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const postHolders = async (req, res) => {
  Joi.attempt(req.body, postHolders.schema);
  Joi.attempt(req.query, postHolders.querySchema);

  const result = await holdersService.createHolder(
    req.body,
    req.query.allornone
  );

  res.status(200).send(result);
};
postHolders.querySchema = Joi.object({
  allornone: Joi.boolean(),
});
postHolders.schema = Joi.object({
  records: Joi.array().items(
    Joi.object({
      UUID: Joi.string().allow(null),
      contactId: Joi.string().allow(null),
      initialAgentId: Joi.string().allow(null),
      identifiers: Joi.array().items(
        Joi.object({
          identifier: Joi.string().allow(null),
        })
      ),
    })
  ),
});

/**
 * Controller for GET /holders
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getHolders = async (req, res) => {
  const result = await holdersService.listHolders(req.query);

  res.status(200).send(result);
};

/**
 * Controller for GET /holders/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getHoldersById = async (req, res) => {
  const id = req.params.id;

  const result = await holdersService.getHolder(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  postHolders,
  getHolders,
  getHoldersById,
};
