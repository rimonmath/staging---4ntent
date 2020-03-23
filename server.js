const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// WHEN NPM RUN BUILD
app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function(req, res) {
  //fixes refresh page redirect problem
  //every route starts through index.html
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);
console.log('server started on port: ' + port);

