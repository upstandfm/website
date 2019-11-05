# Website

[![CircleCI](https://circleci.com/gh/upstandfm/website.svg?style=svg)](https://circleci.com/gh/upstandfm/website)

[![Netlify Status](https://api.netlify.com/api/v1/badges/621e0425-89e1-4168-9168-0341e0f4da45/deploy-status)](https://app.netlify.com/sites/upstand-fm-website/deploys)

Upstand FM landing page.

- [Parcel bundler](#parcel-bundler)
- [Tests](#tests)
- [CI/CD](#cicd)

## Parcel bundler

This project uses [Parcel](https://parceljs.org/) to bundle all assets.

- [Available scripts](#available-scripts)
- [Code formatting](#code-formatting)

### Available scripts

In the project directory, you can run:

#### `npm start`

Runs the website in development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.

#### `npm run build`

Builds the website for production to the `build` folder.<br>
It correctly bundles and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

#### `npm run cy`

Runs end-to-end tests locally using [Cypress](https://www.cypress.io/).

Caveats:

- The local dev server must be running (use `npm start`), before the end-to-end tests can run.
- The [watch-and-reload plugin](https://github.com/bahmutov/cypress-watch-and-reload) is used to rerun tests on source code change. But according to [this issue](https://github.com/cypress-io/cypress/issues/456), this functionality will be native in the future. When that's the case, remove the plugin.

### Code formatting

Code is automatically formatted on commit with [Prettier](https://prettier.io/).

## Tests

### Integration & end-to-end

[Cypress](https://www.cypress.io) is used to run integration- & end-to-end tests, and records them.

The recorded test runs can be viewed [here](https://dashboard.cypress.io/#/projects/t4cjnq/runs). The logs are public, but you need a Cypress account view them.. 🤣

Test files can be found in `/cypress/integration`.

## CI/CD

[CircleCI](https://circleci.com/gh/organizations/upstandfm) is used to:

- Run integration/end-to-end tests (Cypress).
- Build the website.
- Deploy the website via [Netlify](https://app.netlify.com):
  - Preview the website when pushing a `branch`.
  - Release to prod when pushing to `master`.

### Testing

CircleCI requires a Cypress token to record tests and store screenshots.

The token can be found in the [Cypress dashboard](https://dashboard.cypress.io/#/projects/t4cjnq/settings) under "Record Keys". It is configured in CircleCI as an [environment variable](https://circleci.com/gh/upstandfm/website/edit#env-vars) named `CYPRESS_RECORD_KEY`, and used in the `.circleci/config.yml` file.

### Netlify

CircleCI requires a Netlify access token, site ID and publish directory to deploy the built files. These are configured as [environment variables](https://circleci.com/gh/upstandfm/website/edit#env-vars):

#### Token

The Netlify access token can be found in the [1Password](https://1password.com/) "Upstand FM" vault under "Netlify access token for CircleCI".

The token is configured in CircleCI as an environment variable named `NETLIFY_ACCESS_TOKEN`.

#### Site ID

The site ID is configured as an env var named `NETLIFY_SITE_ID`.<br>
Its value can be found in [upstand-fm-website/settings](https://app.netlify.com/sites/upstand-fm-website/settings/general).

Note that the Netlify site ID is named "API ID" in the Netlify web app. And can be found under `Settings > General > Site Details > Site Information`.

#### Publish directory

The publish directory is configured as an env var named `NETLIFY_PUBLISH_DIR`.<br>
The publish directory is named `build`, and is created after running the command `npm run build`. This directory contains the files that Netlify must deploy.
