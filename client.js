const net = require('net');
var socket = new net.Socket();

socket.on('data', (data)=>{
  process.stdout.write(data.toString());
});

process.stdin.on('readable', ()=>{
  let words = process.stdin.read();
  if(words !== null){
    socket.write(words);
  }
});
socket.connect("6969", "0.0.0.0");


