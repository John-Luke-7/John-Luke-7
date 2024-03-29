// Join discord.gg/CyberSec for support! //
// Discord - ash3r#1000 //

const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send(`NOW GO TO ANY UPTIME APP and paste this link`)
})

function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}

module.exports = keepAlive;

// Join discord.gg/CyberSec for support! //
// Discord - ash3r#1000 //