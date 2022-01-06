const express = require('express');
const db = require('./config/connection');
const routes = require('./routes'); 
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

// Logs the mongoose queries 
mongoose.set('debug', true);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for Social Network API running on port ${PORT}!`);
    });
});