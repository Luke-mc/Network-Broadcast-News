const net = require('net');
const currentClient = [];
process.stdin.setEncoding('utf8');
let serverName = null;

const server = net.createServer((socket) => {
  currentClient.push(socket);
  console.log("Port: " + socket.remotePort);
  socket.name = socket.remotePort;

  socket.on("data", (data)=>{
      process.stdout.write(data);
      currentClient.forEach((e) => {
      if(socket === e){
        return;
      }
      e.write(data);
    });
  });
});

server.listen('6969',`0.0.0.0`, ()=>{
  console.log('server listening on ', server.address());
});

process.stdin.on('readable', ()=>{
  let words = process.stdin.read();
  currentClient.forEach((e)=> {e.write("[ADMIN] " + words);});
});




