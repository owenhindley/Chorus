var serveStatic = require("serve-static");
var http = require('http');
var winston = require('winston');
var finalhandler = require("finalhandler");

console.log("**************************************************");
console.log("*                                                *");
console.log("*                     CHORUS                     *");
console.log("*                                                *");
console.log("*  .-.     .-.     .-.     .-.     .-.     .-.   *");
console.log("*.'   `._.'   `._.'   `._.'   `._.'   `._.'   `._*");
console.log("*                                                *");
console.log("**************************************************");
console.log("*                                                *");
console.log("*               2019 Owen Hindley                *");
console.log("*               github.com/owenhindley           *");
console.log("*                                                *");
console.log("**************************************************");
console.log("");
console.log('Starting...');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

// Serve up public/ftp folder
var serve = serveStatic('html', { 'index': ['index.html', 'index.htm'] })
 
// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

io = require("socket.io")(server);
// Listen
server.listen(3000);

io.on("connection", function(socket){
    logger.info("Incoming socket connection");
    socket.emit("handshake", null);
});
