# BFOLLOWB

 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

Social network where users can write messages only for their followers. The user can do request to other user for follow and can administrate his/her requests of other users.  Built with React, Redux and ES6.

Live demo available on <https://bfollowb.netlify.com>

## Prerequisites

Before running this application you need to install the following software on your machine:

1. Node.js  &ndash; <https://github.com/joyent/node/wiki/Installation>
2. npm (Node package manager)  &ndash; <https://github.com/isaacs/npm>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Download the repository from GitHub

```shell
git clone https://github.com/noemenend/bfollowb.git
```

Install de project with NPM

```shell
cd bfollowb
npm install
```

Get a development environment running

```shell
npm start
```

## Play with the application

Open your browser and go to:

+ Website &ndash; <https://localhost:3000>
+ Alternatively, check the live demo [here](https://bfollowb.netlify.com/)
+ Login as default user with orangepanda844:wonderboy
+ Click "Follow" next to "Sigmar Kebling"
+ Click the logout icon top right
+ Login as "Sigmar Kebling" with bluezebra268/president
+ Click on Requests and see if you have one from ""

![Login page](https://github.com/noemenend/bfollowb/blob/master/public/images/requests.jpg)
![homepage](https://github.com/noemenend/bfollowb/blob/master/public/images/usersPage.jpg)
![PrivateProfile Page](https://github.com/noemenend/bfollowb/blob/master/public/images/PrivateProfile.jpg)
![Request Page](https://github.com/noemenend/bfollowb/blob/master/public/images/requests.jpg)

## Built with

+ [Nodejs](https://nodejs.org/) - JavaScript run-time environment
+ [Create React app](https://github.com/facebook/create-react-app) - JavaScript module bundler
+ [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps

## Restrictions

+ For testing purposes, the user data will be fecth from the randomuser.me database.
+ The rest of data, such us messages, requests and session will be held in the browser localStorage.

