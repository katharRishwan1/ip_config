// const express = require('express');
// const app = express();

// app.get('/ip', (req, res) => {
//   const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
// //   console.log('req,cinnedtion------',req.headers['x-forwarded-for']);
//   console.log('req.ip-------', req.headers['x-forwarded-for']?.split(',')[0]);
  
//   res.send(`Client IP address: ${clientIp}`);
// });

// const PORT = process.env.PORT || 7000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
