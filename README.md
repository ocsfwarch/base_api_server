# base_api_server

This app includes the base requirements for an api server.

## Overview

This project was created to provide the base source code requirements for an api server. It includes the components required to respond to a query in a RESTful manner.

## Source Files

| Folder/file path                          | Description                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| `/src/server.js`                          | Provides the interface connection to the app.                |
| `/src/app.js`                             | Provides the user functionality access to the app.           |
| `/components/TestRoute/test.router.js`    | This provides a test route for verification of connectivity. |
| `/components/TestRoute/test.controller.j` | This provides the route access to the data.                  |
| `/errors/errorHandler.js`                 | This is a generic `500` error handler.                       |
| `/errors/methodNotAllowed.js`             | This is a generic `404` error handler.                       |
| `/errors/notFound.js -`                   | This is a generic `405` error handler.                       |
