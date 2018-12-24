const express = require('express');
const api = express();

api.get('/users', function (req, res) {
  return res.send('GET USER');
 });

api.get('/user/:id', function (req, res) {
 return res.send('GET USER');
});

api.post('/user', function (req, res) {
  return res.send('PUSH REQUEST');
});

api.put('/user/:id', function (req, res) {
  return res.send('PUT REQUEST');
});

module.exports = api;