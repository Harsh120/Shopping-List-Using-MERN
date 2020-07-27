const express = require("express");
const mongoose = require("mongoose");

const items = require('./routes/api/items');

const app = express();

// Body Parser Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mango
mongoose
    .connect(db,{useNewUrlParser: true})
    .then(() => console.log('MangoDB connected'))
    .catch(err => console.log(err));

// Any file looking for api/items should refer items variable
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
