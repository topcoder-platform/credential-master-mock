/*
 * IssueGroups controller
 */

const issueGroupsService = require("../services/IssueGroupsService");

/**
 * Controller for GET /issuegroups
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getIssueGroups = async (req, res) => {
  const result = await issueGroupsService.listIssueGroups(req.query);

  res.status(200).send(result);
};

/**
 * Controller for POST /issuegroups
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const postIssueGroups = async (req, res) => {
  res.status(200).send();
};

/**
 * Controller for GET /issuegroups/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getIssueGroupById = async (req, res) => {
  const id = req.params.id;

  const result = await issueGroupsService.getIssueGroup(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

/**
 * Controller for PATCH /issuegroups/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const patchIssueGroupById = async (req, res) => {
  res.status(200).send();
};

/**
 * Controller for DELETE /issuegroups/:id
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const deleteIssueGroupById = async (req, res) => {
  res.status(200).send();
};

/**
 * Controller for POST /issuegroups/:id/members
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const postIssueGroupMembersById = async (req, res) => {
  res.status(200).send();
};

/**
 * Controller for GET /issuegroups/:id/members
 * *
 * @param {Object} req the express request object
 * @param {Object} res the express response object
 * @returns {undefined}
 */
const getIssueGroupMembersById = async (req, res) => {
  const id = req.params.id;

  const result = await issueGroupsService.getIssueGroupMembers(id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getIssueGroups,
  postIssueGroups,
  getIssueGroupById,
  patchIssueGroupById,
  deleteIssueGroupById,
  postIssueGroupMembersById,
  getIssueGroupMembersById,
};
