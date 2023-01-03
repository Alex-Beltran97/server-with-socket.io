// HTMl References
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");


const socket = io();

socket.on( "connect", ()=>{

  // console.log("Connected");

  lblOffline.style.display = "none"
  lblOnline.style.display = ""
});

socket.on( "disconnect", ()=>{
  
  lblOnline.style.display = "none"
  lblOffline.style.display = ""
  // console.log("Disconnected from server");
});

socket.on("send-message", ( payload )=>{
  console.log( payload );
});

btnSend.addEventListener("click", ()=>{
  const message = txtMessage.value;

  const payload = {
    message, 
    id: "sadasdq3322",
    date: new Date().getTime()
  };

  socket.emit("send-message", payload, ( id )=>{
    console.log("From Server "+ id );
  });
});