'use strict';

const express = require('express');
require('dotenv').config();

const gitapi = require("./services/gitapi")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
   return "API by Christopher Arredondo"
});
app.get('/historycommits', (req, res) => {
    gitapi.getInfoRepoCommits().then(data => {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    }).catch(function (e) {
        res.status(500, {
            error: e
        });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);