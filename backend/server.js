
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

// Initialize express and socket.io
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Socket connection handling
io.on('connection', (socket) => {
  socket.on('draw', (drawData) => {
    // Broadcast drawing data to all connected clients
    socket.broadcast.emit('draw', drawData);
  });
});

// Database connection and server startup
mongoose.connect(process.env.MONGODB_URI);
server.listen(process.env.PORT || 3001);