const express = require('express');
const app = express();
const port = 8000;
const passport = require('passport');
const passportJWT = require('./config/passport-jwt_stratergy');
const db = require('./config/mongoose');

app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.use("/", require('./routes'));
app.listen(port, function (err) {
    if (err) {
        console.log("Error in connecting to the server");
    }
    else {
        console.log(`Successfully connected to the server and running in ${port}`);
    }
})