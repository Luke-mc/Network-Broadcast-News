const net = require('net');
const readline = require('readline');
var currentClient = [];
process.stdin.setEncoding('utf8');

const server = net.createServer((socket) => {
  console.log("this  is " + socket.remoteAddress);
  socket.write("hello");
  socket.on("data", (data)=>{
    process.stdout.write(data.toString());
  });
  currentClient.push(socket);
});

server.listen('6969',`0.0.0.0`, ()=>{
  console.log('server listening on ', server.address());
});

process.stdin.on('readable', ()=>{
  let words = process.stdin.read();
  if(words !== null){
    currentClient.forEach((e)=> {e.write(words);});
  }
});



// server.on('data', (data)=>{
//   console.log(data.toString());
// });

// function getClients(){
//   return currentClient;
//   }
// function getServer(){
//     return server;
//   }

//   module.exports = {
//     getClients,
//     getServer
//   };


