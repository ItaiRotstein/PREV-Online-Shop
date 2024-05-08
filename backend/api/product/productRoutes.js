const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductsData

} = require('./productController');

router.route('/').get(getProducts);
router.route('/data').get(getProductsData);

module.exports = router;
