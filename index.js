const express = require('express');
const os = require('os');

const app = express();

app.get('/api/ip', (req, res) => {
  const interfaces = os.networkInterfaces();
  let address;

  for (let iface in interfaces) {
    for (let i = 0; i < interfaces[iface].length; i++) {
      const alias = interfaces[iface][i];
      console.log('alis------', alias);
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        address = alias.address;
        break;
      }
    }
  }

  res.json({ ip: address });
});

app.listen(5300, () => console.log('Server running on port 5300'));
