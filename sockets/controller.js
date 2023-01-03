const socketController = socket =>{

  console.log("Client is connected", socket.id);

  socket.on( "disconnect", ()=>{
    console.log("Client is disconnected");
  }); 

  socket.on("send-message", async ( payload, callback ) => { 

    const id = "123456";

    callback( id );
  
    socket.broadcast.emit("send-message", payload );
  });

};

module.exports = {
  socketController
};