# Nx-React-MicroFrontend

React Micro Frontend in Nx workspace

## Installation

use concurrently library for run multiple line through single command. This will be easy when you have many applications

    npm install -g concurrently

After that, need to install node modules.

    npm install

## Run on local

if concurrently library run on globally. just run

    npm start

if not run

    nx run host:serve
    nx run remote:serve

Host will run on `http://localhost:4200` and Remote will run on ` http://localhost:4201`

When you open Host application. remote application code can be find inside the host UI.

## build for production

if concurrently library run on globally. just run

    npm run build

if not run

    nx run host:build
    nx run remote:build

This will create another folder call dist in the root folder. copy `dist/host` application for production deployment.
