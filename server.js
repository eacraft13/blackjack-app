const express = require('express');

(function() {
  const app = express();

  app.use(express.static('public'));

  app.listen(8080);
}());
