# React playground

In order to check the original challenge content, please check this [repo](https://github.com/ifood/ifood-frontend-test).

## Live demo

Check its live demo [here](https://ifood-frontend-test.herokuapp.com/)

## How to setup this test

After cloning the repository, just run **$ yarn** or **$ npm install** in order to install all the dependencies. After that you should be able to start the application by running **$ yarn start** or **$ npm run start**.
The application was created with [creat-react-app](https://github.com/facebook/create-react-app), so if you get problems or have any doubts about how to proceed with the setup of the application, its docs may help you.

## .env

The application uses some configuration provided from your **enviroment**. In order to do so, configure the **.env.development.local** variables accordingly your environment.

- **REACT_APP_API_URL** points to your Web Service (I'll explain it soon).
- **REACT_APP_FILTERS_URL** is used to configure the URL in which the application will attempt to load the filters' configuration.

## Web Service

All the data used in this application is providaded by a RESTful Web Service built on Node with [Restify](http://restify.com/).
You can check the repository by clicking [here](https://github.com/b-ferreira/spotifood-server) and have all necessary information in order to set it up.
