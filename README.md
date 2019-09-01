# Website

Upstand FM landing page.

- [Parcel bundler](#parcel-bundler)
- [CI/CD](#cicd)

## Parcel bundler

This project uses [Parcel](https://parceljs.org/) to bundle all assets.

- [Available scripts](#available-scripts)
- [Code formatting](#code-formatting)

### Available scripts

In the project directory, you can run:

#### `npm start`

Runs the website in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.

#### `npm run build`

Builds the website for production to the `build` folder.<br>
It correctly bundles and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### Code formatting

Code is automatically formatted on commit with [Prettier](https://prettier.io/).

## CI/CD

[CircleCI](https://circleci.com/gh/organizations/upstandfm) is used to:

- Audit npm dependencies for security vulnerabilities.
- Build the website.
- Deploy the website via [Netlify](https://app.netlify.com):
  - Preview the website when pushing a `branch`.
  - Release to prod when pushing to `master`.

### Netlify

CircleCI requires a Netlify access token, site ID and publish directory to deploy the built files (Storybook + app). These are configured as [environment variables](https://circleci.com/gh/upstandfm/app/edit#env-vars):

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
