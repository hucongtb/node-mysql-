//router/index.js
var express = require('express');
var router = express.Router();
var user = require('../modules/handel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SQL for MySQL' });
});
router.get('/addUser', function(req, res, next) {
    user.add(req, res, next);
});
router.post('/queryAll', function(req, res, next) {
    user.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    user.queryById(req, res, next);
});
router.get('/deleteUser', function(req, res, next) {
    user.delete(req, res, next);
});
router.get('/update', function(req, res, next) {
    res.render('update');
});
router.post('/updateUser', function(req, res, next) {
    user.update(req, res, next);
});
// router.get('/userAll', function(req, res, next) {
//     user.userAll(req, res, next);
// });
router.get('/userTest', function(req, res, next) {
    user.userTest(req, res, next);
})
module.exports = router;