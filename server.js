const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auths = require('./routes/api/auth');

const app = express();

// Body Parser Middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

mongoose.set('useCreateIndex', true);
// Connect to mango
mongoose
    .connect(db,{useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('MangoDB connected'))
    .catch(err => console.log(err));

// Any file looking for api/items should refer items variable
app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/auth', auths);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
