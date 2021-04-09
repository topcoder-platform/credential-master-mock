# Steps to verify

## Verify app

To verify the API is working correctly, first run the API as per the README. Then, find the postman environment and collection in `./docs`. Load them both into Postman (https://www.postman.com/) and run each request. Both success and fail cases are documented, including 200, 404, 400 and 401.

The request and response schema for some endpoints is missing (see: https://discussions.topcoder.com/discussion/4760/no-request-and-response-example)

Endpoints with no schema include:
- POST /issuegroups
- POST /issuegroups/{id}/members
- PATCH /issuegroups/{id}/members

Run lint and deploy to heroku (instructions are in README)

**Note**: 401 response codes are not listed in swagger, but are required anyway, see: https://discussions.topcoder.com/discussion/4881/authentication. Copilot says: 
> Just note that we did ask specifically to add the authorization header - that implies at least a 401 being returned if that header was not present.

## Verify swagger

The swagger file is provided in `./docs/swagger.yaml`, and also found here: https://app.swaggerhub.com/apis/credentialmaster/credential-master_rest_api/v1-oas3#/. **EXTREMELY IMPORTANT NOTE: the swagger file may have [changed](https://discussions.topcoder.com/discussion/4926/swagger-recently-updated) since the submission phase ended. The `swagger.yaml` in the `docs` folder is the swagger file as of my submission.**

Also take note of this thread: https://discussions.topcoder.com/discussion/4889/no-404-and-400. In general, I recommend reading all the threads in discussion before reviewing to make sure you're up to date.

Run each postman request and make sure that the request and response matches each endpoint as described by the swagger.


## Encapsulation
The spec mentions that:

> The code should be written to allow changing from JSON files to real persistence in the future. Please ensure that the data retrieval access is well encapsulated and easily switched. Please build the models and API correctly - don't just return the JSON from the file system, but build this out so that we can easily swap in a better implementation in the future.

I have split code into a controller/services architecture (https://discussions.topcoder.com/discussion/4690/ambiguity). The controllers do not "know" about the mock data. Instead, they call a service function that in turn calls a util function that retrieves the mock data. This ensures easy development later on, when each service function can contain whatever business logic is required instead of retreiving mock data.

