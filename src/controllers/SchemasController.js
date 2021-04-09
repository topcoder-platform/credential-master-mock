/*
 * Schemas controller
 */

const schemasService = require("../services/SchemasService");

/**
 * Controller for GET /schemas
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getSchemas = async (req, res) => {
  const result = await schemasService.listSchemas(req.query);

  res.status(200).send(result);
};

/**
 * Controller for GET /schemas/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getSchemaById = async (req, res) => {
  const id = req.params.id;

  const result = await schemasService.getSchema(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getSchemas,
  getSchemaById,
};
