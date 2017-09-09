
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
/* GET users listing. */
router.get('/', function(req, res, next) {
   fetch('http://jsonplaceholder.typicode.com/users/').then((data) =>  res.render('users', { title: 'Express' })).catch((err)=>console.log(err));
   res.end();
});

module.exports = router;
