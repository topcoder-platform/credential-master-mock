const config = require("config");
const _ = require("lodash");
const {
  autoWrapExpress,
  errorHandler,
  authHandler,
} = require("./common/utils");

// define routes structurally
const routes = {
  "/accounts": {
    get: {
      controller: "AccountsController",
      method: "getAccounts",
    },
  },
  "/accounts/:id": {
    get: {
      controller: "AccountsController",
      method: "getAccountById",
    },
  },
  "/presentations": {
    post: {
      controller: "PresentationsController",
      method: "postPresentation",
    },
  },
  "/presentations/:id": {
    get: {
      controller: "PresentationsController",
      method: "getPresentationById",
    },
  },
  "/issuegroups": {
    post: {
      controller: "IssueGroupsController",
      method: "postIssueGroups",
    },
    get: {
      controller: "IssueGroupsController",
      method: "getIssueGroups",
    },
  },
  "/issuegroups/:id": {
    get: {
      controller: "IssueGroupsController",
      method: "getIssueGroupById",
    },
    patch: {
      controller: "IssueGroupsController",
      method: "patchIssueGroupById",
    },
    delete: {
      controller: "IssueGroupsController",
      method: "deleteIssueGroupById",
    },
  },
  "/issuegroups/:id/members": {
    get: {
      controller: "IssueGroupsController",
      method: "getIssueGroupMembersById",
    },
    post: {
      controller: "IssueGroupsController",
      method: "postIssueGroupMembersById",
    },
  },
  "/holders": {
    post: {
      controller: "HoldersController",
      method: "postHolders",
    },
    get: {
      controller: "HoldersController",
      method: "getHolders",
    },
  },
  "/holders/:id": {
    get: {
      controller: "HoldersController",
      method: "getHoldersById",
    },
  },
  "/credentials": {
    post: {
      controller: "CredentialsController",
      method: "postCredentials",
    },
    get: {
      controller: "CredentialsController",
      method: "getCredentials",
    },
  },
  "/credentials/:id": {
    get: {
      controller: "CredentialsController",
      method: "getCredentialById",
    },
    patch: {
      controller: "CredentialsController",
      method: "patchCredentialById",
    },
  },
  "/credentialdefinitions": {
    get: {
      controller: "CredentialDefinitionsController",
      method: "getCredentialDefinitions",
    },
  },
  "/credentialdefinitions/:id": {
    get: {
      controller: "CredentialDefinitionsController",
      method: "getCredentialDefinitionById",
    },
  },
  "/verificationdefinitions": {
    get: {
      controller: "VerificationDefinitionsController",
      method: "getVerificationDefinitions",
    },
  },
  "/verificationdefinitions/:id": {
    get: {
      controller: "VerificationDefinitionsController",
      method: "getVerificationDefinitionById",
    },
  },
  "/schemas": {
    get: {
      controller: "SchemasController",
      method: "getSchemas",
    },
  },
  "/schemas/:id": {
    get: {
      controller: "SchemasController",
      method: "getSchemaById",
    },
  },
};

/**
 * Configure all routes for express app
 * @param app the express app
 */
module.exports = (app) => {
  // handle auth
  app.use(authHandler);

  // compile routes
  _.each(routes, (verbs, path) => {
    _.each(verbs, (def, verb) => {
      const method = require(`./controllers/${def.controller}`)[def.method];
      if (!method) throw new Error(`${def.method} is undefined`);

      app[verb](`${config.API_BASE}${path}`, autoWrapExpress([method]));
    });
  });

  // handle errors
  app.use(errorHandler);
};
