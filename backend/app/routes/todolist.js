const express = require('express');
const app = express();

const bodyparse = require('body-parser'); //converting from json format to normal

const create = require('../controllers/create');
const update = require('../controllers/update');
const gettodolist = require('../controllers/gettodolist');






app.post('/insert',create)
app.put('/update',update)
app.get('/gettodolist',gettodolist)


module.exports = app





