var http = require('http'),
    express = require('express'),
    logfmt = require("logfmt"),
    port = 5000;


var app = express();
app.configure(function () {
  app.use(express.json());
  app.use(express.static(__dirname));
  app.use(logfmt.requestLogger());
});



var httpServer = http.createServer(app).listen(process.env.PORT || port, function () {
  console.log('Article listening on port ' + port);
});
