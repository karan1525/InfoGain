const express = require('express');
require('./services/passport.js');

const app = express();
require('./routes/authRoutes')(app); //immediately invokes function

const PORT = process.env.PORT || 5000;
app.listen(PORT);
