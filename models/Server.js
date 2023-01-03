const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");

class Server {
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT || 3000;
    this.server = require("http").createServer( this.app );
    this.io     = require("socket.io")( this.server );

    this.paths  = {};

    // Middlewares
    this.middlewares();

    // Routes from my app
    this.routes();

    // Sockets

    this.sockets();
  }

  middlewares() {
    // CORS

    this.app.use(cors());

    // Public directory

    this.app.use(express.static("public"));

  }

  routes() {
    // const { auth } = this.paths;

    // this.app.use(auth, require("../routes/auth.routes"));
  }

  sockets() {

    this.io.on("connection", socketController);
  };

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server listening in port http://localhost:${ this.port }`);
    });
  }
};

module.exports = Server;