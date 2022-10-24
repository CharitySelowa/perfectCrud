const express = require('express');
const app = express();

const bodyparse = require('body-parser'); //converting from json format to normal

const create = require('../controllers/create');
const update = require('../controllers/update');
const gettodolist = require('../controllers/gettodolist');
const deletelist = require('../controllers/deletelist');






app.post('/insert',create)
app.put('/update',update)
app.get('/gettodolist',gettodolist)
app.delete('/deletelist',deletelist)


module.exports = app





