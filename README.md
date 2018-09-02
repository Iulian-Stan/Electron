# Electron Webpack Starter
Sample [Electron 2](https://electronjs.org/) application using [Webpack 4](https://webpack.js.org) for builds.
This project is based on another [Angular Webpack Starter](https://github.com/Iulian-Stan/Angular)

## Quick start

```bash
# clone this project and use it as it is, or rename it to whatever you like
git clone https://github.com/Iulian-Stan/Electron.git

# change directory to the repo
cd Electron

# install the dependencies
npm install

# start the server
npm start
```

Open one of the following links in your browser:
* [http://127.0.0.1:8080](http://127.0.0.1:8080)
* [http://localhost:8080](http://localhost:8080)

**This project uses the default port (8080), in case the port is used by another application check the terminal asfter running ```npm start``` for the assigned port value**

## File Structure

```
Angular/
 ├──config/                        * configuration files (karma, protractor, webpack)
 |   ├──karma*.js                  * karma config for unit tests
 |   ├──protractor.conf.js         * protractor config for end-to-end tests
 │   ├──webpack.common.js          * common tasks for webpack build process shared for dev and prod
 │   ├──webpack.dev.js             * webpack development config
 │   ├──webpack.prod.js            * webpack production config
 │   └──webpack.test.js            * webpack testing config
 ├──e2e/                           * end-to-end tests
 |   ├──app.e2e-spec.ts            * e2e test specification
 │   └──tsconfig.e2e.json          * e2e specific typescript configuartion
 ├──src/                           * our source files that will be compiled to javascript
 │   ├──app/                       * Angular web application folder
 │   │
 |   ├──electron.ts                * electron entry file
 |   ├──index.html                 * index page
 |   ├──main.ts                    * entry file of the application
 |   ├──polyfills.ts               * polyfills file (allows running an Angular application in most (browsers)[https://angular.io/guide/browser-support])
 │   └──vendor.ts                  * vendor file (imports the application's third-party modules)
 ├──electron-builder.json          * electron builder configuration
 ├──package.json                   * npm dependencies
 ├──tsconfig.json                  * project wise typescript configuration
 └──tslint.json                    * typescript lint config

```

## Usage

### Install Dependencies

This project does not require any global packages beside those specified in ```package.json```.
Just make sure you have latest Node (>= 8) & NPM (>= 5) versions installed.

```bash
node --version
npm --version
```

### Build files

```bash
# development
npm run build:dev
# production
npm run build:prod
```

### Run development server

```bash
# development and open it in electron
npm start
```

### Run tests

```bash
# karma unit tests
npm run test
# protractor e2e tests
npm run e2e
```
**Note:** You need a running application for e2e tests:
* Run ```npm run serve``` in a separate terminal before running ```npm run e2e```
* Make sure the application is using the default port (8080), otherwise adjust it in ```protractor.conf.js```

### Run typescript linter

```bash
npm run tslint
```

### Run electron

Unlike ```npm start``` the following commands won't start webpack development server but will load the content from ```dist``` folder.

```bash
# development
npm run electron:dev
# production
npm run electron:prod
```

### Package the application

Electron allows packaging the application from a single pc for any target platform.

```bash
# package for windows
npm run package:windows
# package for linux
npm run package:linux
# package for mac
npm run package:mac
```