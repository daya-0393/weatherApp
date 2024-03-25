const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

// app.get('/cities/:city', (req, res) => {
//   const city = req.params.city;
//   console.log(req);
//   axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=bd07f2c9a75f0c0307b967edf3525671`)
//   .then((result) => {
//     console.log(result);
//   }).catch((err) => {
//     res.send(err);
//   });
// })

app.listen(port)