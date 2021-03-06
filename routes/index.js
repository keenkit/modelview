var express = require('express');
var common = require('./../util/common.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'View Model Home',
    style: common.getTheme(req)
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'View Model Login',
    style: common.getTheme(req)
  });
});

/*
function viewEntity(req, res){
  return res.render('entities/viewEntity',{
    title: req.params.name + ' | ViewModel',
    entityName: req.params.name,
    style: common.getTheme(req)
  });
}
*/

//router.post('/:name', viewEntity);

module.exports = router;
