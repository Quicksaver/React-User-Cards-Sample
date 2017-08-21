This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) v1.4.0 on Node.js v8.4.0 (npm v5.3.0).

## Installation
Clone the git repo locally. Then `cd` into it and run `npm install` to install all dependencies. Dependencies not part of create-react-app that will also be installed:
- leaflet v1.2.0
- react-leaflet v1.6.1
- react-router-dom v4.1.2

## Usage

Run `npm start` to start development server.

A list of company cards is shown, with an location overview map below them. Clicking any of them takes you to that company's details page, with all the available ownership, contact and address info about it, as well as a map zoomed in onto its location.

Run `npm run build` to create a static version that is fully functional through [serve](https://github.com/zeit/serve) if you have it installed.
