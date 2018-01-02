const express = require('express'); // get express
const app = express(); // make express app

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
