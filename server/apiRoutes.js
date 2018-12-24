const express = require('express');
const api = express();
const { getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser } = require('./queries');

api.get('/users', getUsers);
api.get('/user/:id', getUserById);
api.post('/user', createUser);
api.put('/user/:id', updateUser);
api.delete('/user/:id', deleteUser);

module.exports = api;