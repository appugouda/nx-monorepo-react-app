

# BradyplcWs

Demo React App 

## Setup
On Root folder
Run `npm install`

## Development server

Run `nx serve brady-comm-react` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `nx serve api` for an API server. Navigate to http://localhost:3333/api. This backend api app will be listening at port 3333

Try:
http://localhost:3333/api
http://localhost:3333/api/data

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test brady-comm-react` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e brady-comm-react` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

