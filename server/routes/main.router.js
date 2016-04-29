var express = require('express');

var mainRouter = express.Router();
var index = require('../controllers/index.controller');
 
mainRouter.get('/', index.render);
   
module.exports = mainRouter;