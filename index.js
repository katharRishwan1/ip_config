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
app.get('/ip',(request, res) => {
    const ip = request.headers['cf-connecting-ip'] ||  
    request.headers['x-real-ip'] ||
    request.headers['x-forwarded-for'] ||
    request.socket.remoteAddress || '45';
    console.log('request.headers[cf-connecting-ip]-------',request.headers['cf-connecting-ip']);
    console.log('x-real-ip-------',request.headers['x-real-ip']);
    console.log('x-forwarded-for-------',request.headers['x-forwarded-for']);
    console.log('request.socket.remoteAddress-------',request.socket.remoteAddress);
    const ips = {
        xreal : request.headers['cf-connecting-ip'],
        xReal: request.headers['x-real-ip'],
        xForward :request.headers['x-forwarded-for'],
        socket:request.socket.remoteAddress
    }
    
    return res.json({
        msg:'its working',
        output:ip,
        ips
    })
})

app.listen(5300, () => console.log('Server running on port 5300'));
