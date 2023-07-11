// The file for express backend server
// To run the typescript file:
// way 1: 
// can be access by http://localhost:3000/ after running $ npx ts-node src/server.ts
// The command npx ts-node is a shortcut to run typescript code without the need to compile into javascript
// (preferred) way 2:
// run with nodemon in 'watch' mode, so that every time the files are changed, the changes are applied
// first, set up "start:dev": "nodemon src/server.ts" in package.json
// then run $ npm run start:dev, which will start with the 'start:dev' script
// way 3:
// transpile ts into js by running $ tsc src/server.ts
// and then run the js file with $ node src/server.js
//============================================================================================================
// To stop, try Ctrl+C if still running in command line, or
// check process id with $ lsof -i :3000
// and kill with $ kill -9 <pid>

import express, { Request, Response } from "express";
import controllerFunction from "./controller";
import { json } from "body-parser";
// const express = require('express')
const app = express(); // create an express server
const port = 3000;

// handling CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", 
             "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", 
             "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(json()); // middleware used in Express to parse incoming request bodies in JSON format

// root
app.get('/', controllerFunction);
// route for handling requests from the Angular client
app.get('/test', (req, res) => {
  res.json({ content: 
          'Test from the Express server!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});