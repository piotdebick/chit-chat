const socketIO = require('socket.io');
const {generateMessage} = require('./message');


let socketConnection = (server) => {
  let io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to Chit Chat!'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));

    socket.on('createMessage', (message) => {
      console.log('New message: ', message);
      io.emit('newMessage', generateMessage(message.from, message.text));
    });

    socket.on('disconnect', () => {
      console.log('User disconnected from server');
    });
  });
}

module.exports = {socketConnection};
