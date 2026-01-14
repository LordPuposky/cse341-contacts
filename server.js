/**
 * W01 Project: Contacts Part 1
 * Server entry point
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connection');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});