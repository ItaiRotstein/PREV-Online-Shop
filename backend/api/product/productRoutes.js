const express = require('express');
const router = express.Router();
const {
  getProducts,

} = require('./productController');

router.route('/').get(getProducts);

module.exports = router;
