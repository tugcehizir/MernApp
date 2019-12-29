const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http').createServer(app);
const userCreateRouter = require('./routes/createEmployee');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userCreateRouter);

const port = 3000;
http.listen(port, () => console.log(`Servet localhost: ${port} üzerinde ayakta`));