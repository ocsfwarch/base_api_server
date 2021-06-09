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

## Installation

1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm run start:dev` to start your server in development mode.
4. Use Postman or a browser to check the server at `localhost:5000/test`

- The server should return:
  `{ "data":{ "title":"test title", "description":"this is a test data structure", "results":"SUCCESS" } }`

## Testing

- There is are 2 test cases, / GET route and /test GET route.
- Run `npm run test`.
- The root test case expects a `404` not found result.
- The /test case expects a `200` status and the exact test data structure.
