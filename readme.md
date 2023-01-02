# React Micro Front-end

![Screenshot](https://raw.githubusercontent.com/pooyadhgh/react-microfrontend/main/screenshot/screenshot.png 'Screenshot')

A Front-end application developed in runtime micro front-end architecture using React.js and Vue.js, including three different apps connected with [Webpack Module Federation plugin](https://webpack.js.org/concepts/module-federation/ 'Webpack Module Federation plugin'):

- `Container` application as the primary host for other apps, with React.js
- `Marketing` and `Auth` applications also with React.js
- `Dashboard` application with Vue.js

### Overall Architecture

- Webpack configurations are customized with Module Federation Plugin to share dependencies during the runtime phase.
- Routing between multiple applications exists with `react-router-dom` with custom configurations in `Browser History` and `Memory History` APIs.
- There is a global state in apps for authentication purposes.
- YAML files are configured for GitHub actions to deploy the app to an AWS S3 bucket.
- Dummy customized Material UI components are used in UI.

## Usage

### Install Dependencies

You need to go through all the packages and run this command to install dependencies:

```
npm install
```

### Run development mode

Then, in each package, you need to run the start command:

```
npm start
```

## Build & Deploy Client

To build each app, you can run this command:

```
npm run build
```

The deployment process can be configured in YAML files. YAML files are now configured to build and deploy the app into an AWS S3 bucket, which will be triggered when a commit is pushed into the main branch.

## License

The MIT License
Copyright (c) 2022 Pooyadhgh
