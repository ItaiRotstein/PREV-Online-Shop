const asyncHandler = require("express-async-handler");
const Product = require("../../models/productModel");

// @desc    Get products
// @route   GET /api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
console.log(req.query);
  const {
    sort: {
      byPrice, 
      byAlphabet,
      byPopularity
    },
    byStock,
    byFastDelivery,
    byRating,
    itemsPerPage,
    searchQuery
  } = req.query;
  const pipline = [
    {
      $facet: {
        metadata: [{ $count: 'totalCount' }],
        data: [{ $limit: +itemsPerPage }],
      }
    },
  ];

  if (byPrice) {
    const sortOrder = byPrice === 'lowtohigh' ? 1 : -1;
    pipline.unshift({ $sort: { price: sortOrder } });
  }

  if (byAlphabet === 'true') {
    pipline.unshift({ $sort: { name: 1 } });
  }

  if (byPopularity === 'true') {
    pipline.unshift({ $sort: { popularity: 1 } });
  }

  const products = await Product.aggregate(pipline);

  if (!products) {
    res.status(400);
    throw new Error("Product not found");
  }
  res.status(200).json({
    success: true,
    products: {
      metadata: { totalCount: products[0].metadata[0].totalCount },
      data: products[0].data,
    }
  });
});


module.exports = {
  getProducts,
};
