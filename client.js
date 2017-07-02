const net = require('net');
var socket = new net.Socket();
// var server = require("./server.js");
// var currentChat = [];

// currentChat.push(server.getServer());
// currentChat.push(server.getClients());

// console.log(currentChat);

socket.on('data', (data)=>{
  console.log(data.toString());
});
process.stdin.on('readable', ()=>{
  let words = process.stdin.read();
  if(words !== null){
    socket.write(words);
  }
});
socket.connect("6969", "0.0.0.0");


