let Express = require('express')
let Bears = require('./bears/bears.route')

let router = Express.Router({mergeParams: true});
router.use('/bears', Bears);
module.exports = router;
