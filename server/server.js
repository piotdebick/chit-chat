const path = require('path');
const http = require('http');
const express = require('express');
const {socketConnection} = require('./utils/socket')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;
let app = express();
let server = http.createServer(app);
socketConnection(server);

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
