const express = require('express') 
const morgan = require('morgan') 
const cors = require('cors') 
const routes = require('./routes/index.js') 


const server = express()
//server.use(express.static('public'));

server.use(express.json())
server.use(morgan('dev'))
server.use(cors({
  origin: '*',
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

server.use('/', routes)

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server