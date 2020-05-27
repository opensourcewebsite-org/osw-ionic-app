# Installation

Please read through our [Contributing Guidelines](CONTRIBUTING.md).

## General setup

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g @ionic/cli`
* Clone this repository: `git clone https://github.com/opensourcewebsite-org/osw-ionic-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Deploying

### Progressive Web App

1. Run `npm run build --prod`
2. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`