'use strict';

const express = require('express');
require('dotenv').config();

const gitapi = require("./services/gitapi")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    gitapi.getInfoRepo().then(data => {
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
    }).catch(function (e) {
        res.status(500, {
            error: e
        });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);