const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app); //immediately invokes function

const PORT = process.env.PORT || 5000;
app.listen(PORT);
