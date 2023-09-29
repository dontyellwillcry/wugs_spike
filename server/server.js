const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const calendarRouter = require('./routes/router.calendar');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests

/** ---------- ROUTES ---------- **/

// Define the route for serving static files from the 'build' directory.
// Place this before your API route definitions.
app.use(express.static('build'));

// Define your API route for '/api/calendar'.
app.use('/api/calendar', calendarRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
