# Credential Master Mock API

# Dependencies

- Nodejs(v14+)

# Configuration

All config values can be set in `config/default.js` or via environment variable.

- `PORT`: HTTP port the app exposed to. Default value is `3000`
- `API_BASE`: The API endpoint base. Default value is `/v1`
- `MOCK_DATA_PATH`: The local path where the mock json files are placed, by default this variable points to the `data` folder in root directory.
- `NOT_FOUND_ID`: The id that returns 404. When this id is passed as a path param to any endpoint, 404 is thrown. This is for mocking purposes. Defaults to `notfound` (So calling `GET /v1/accounts/notfound` would throw 404, as would any other endpoint that takes `id` and has a 404 response)

# Local Deployment

Install deps: 
```bash
npm install
```

Start the app: 
```bash 
npm start
```

To start a dev server (one that automatically reloads when a file is changed) run:

```bash
npm run dev
```

By default the app listens on port 3000.

# Lint

Run lint: 

```bash
npm run lint
```

Fix lint errors:
```bash
npm run lint:fix
```

# Heroku deployment

Make sure that you [have a Heroku account](https://signup.heroku.com/) and also have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and [Git](https://git-scm.com/) installed. If you do, run:

```bash
git init
git add .
git commit -m "deploying to heroku"
```

This will create a git repository and commit the code. Then, run:
```bash
heroku login
```
This will redirect you to the browser and log you in. Then:
```
heroku create
git push heroku master
```
The CLI will show you the endpoint that you've deployed to. To change the name of your app, run (for example, to rename the app to "newname"):
```bash
heroku apps:rename newname
```

# Additonal notes:
- The request and response schema for `POST /issuegroups`,  `PATCH /issuegroups/:id`,  `POST /issuegroups/{id}/members` is missing in the swagger and so for those endpoints, no payload validation is done and no response payload is sent.

# Verification

See `Validation.md`
