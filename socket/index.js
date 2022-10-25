const server = require('http').createServer();
const io = require("socket.io")(server, {
    origins: ['*:*', 'http://127.0.0.1:8000', 'http://192.168.15.149:8000/']
});

io.on('connection', client => {
    client.on('permissionData', data =>{
        console.log("new data", data);
        io.emit('data baru', data);
    });
    client.on('disconnect',() => {});
});

server.listen(3000);