const asyncHandler = require('express-async-handler');
const Product = require('../../models/productModel');

// @desc    Get products
// @route   GET /api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  const {
    byInStock,
    byNewIn,
    itemsPerFetch,
    searchQuery,
    sort: {
      byPrice,
      byAlphabet,
      byPopularity
    },
    bySize,
    byMaterial,
    byGender
  } = req.query;

  const pipeline = [
    {
      $facet: {
        data: [{ $limit: +itemsPerFetch }],
        totalProductsCount: [{ $count: 'totalProducts' }],
        inStockCount: [{ $match: { inStock: true } }, { $count: 'inStock' }],
        newInCount: [{ $match: { newIn: true } }, { $count: 'newIn' }],
        //SIZES
        sizeXScount: [{ $match: { sizes: 'XS' } }, { $count: 'XS' }],
        sizeScount: [{ $match: { sizes: 'S' } }, { $count: 'S' }],
        sizeMcount: [{ $match: { sizes: 'M' } }, { $count: 'M' }],
        sizeLcount: [{ $match: { sizes: 'L' } }, { $count: 'L' }],
        sizeXLcount: [{ $match: { sizes: 'XL' } }, { $count: 'XL' }],
        //MATERIAL
        countCashmere: [{ $match: { material: 'Cashmere' } }, { $count: 'Cashmere' }],
        countCotton: [{ $match: { material: 'Cotton' } }, { $count: 'Cotton' }],
        countPolyester: [{ $match: { material: 'Polyester' } }, { $count: 'Polyester' }],
        countLeather: [{ $match: { material: 'Leather' } }, { $count: 'Leather' }],
        countRubber: [{ $match: { material: 'Rubber' } }, { $count: 'Rubber' }],
        countDenim: [{ $match: { material: 'Denim' } }, { $count: 'Denim' }],
        countWool: [{ $match: { material: 'Wool' } }, { $count: 'Wool' }],
        countAcrylic: [{ $match: { material: 'Acrylic' } }, { $count: 'Acrylic' }],
        countSilk: [{ $match: { material: 'Silk' } }, { $count: 'Silk' }],
        countSuede: [{ $match: { material: 'Suede' } }, { $count: 'Suede' }],
        countSpandex: [{ $match: { material: 'Spandex' } }, { $count: 'Spandex' }],
        //GENDER
        countWoman: [{ $match: { gender: 'Woman' } }, { $count: 'Woman' }],
        countMan: [{ $match: { gender: 'Man' } }, { $count: 'Man' }],
        countOlderBoys: [{ $match: { gender: 'Older Boys' } }, { $count: 'OlderBoys' }],
        countYoungerBoys: [{ $match: { gender: 'Younger Boys' } }, { $count: 'YoungerBoys' }],
        countUnisex: [{ $match: { gender: 'Unisex' } }, { $count: 'Unisex' }],
      }
    },
  ];

  if (searchQuery) {
    if (searchQuery) {
      pipeline.unshift({ $match: { name: { $regex: searchQuery, $options: 'i' } } });
    }
  }

  if (byPrice) {
    const sortOrder = byPrice === 'lowtohigh' ? 1 : -1;
    pipeline.unshift({ $sort: { price: sortOrder } });
  }

  if (byAlphabet === 'true') {
    pipeline.unshift({ $sort: { name: 1 } });
  }

  if (byPopularity === 'true') {
    pipeline.unshift({ $sort: { popularity: -1 } });
  }

  if (byInStock === 'true') {
    pipeline.unshift({ $match: { inStock: true } });
  }

  if (byNewIn === 'true') {
    pipeline.unshift({ $match: { newIn: true } });
  }

  //SIZES
  for (let i = 0; i < Object.keys(bySize).length; i++) {
    if (Object.values(bySize)[i] == 'true') {
      pipeline.unshift({ $match: { sizes: Object.keys(bySize)[i] } });
    }
  }
  //MATERIAL
  for (let i = 0; i < Object.keys(byMaterial).length; i++) {
    if (Object.values(byMaterial)[i] == 'true') {
      pipeline.unshift({ $match: { material: Object.keys(byMaterial)[i] } });
    }
  }
  //GENDER
  for (let i = 0; i < Object.keys(byGender).length; i++) {
    if (Object.values(byGender)[i] == 'true') {
      pipeline.unshift({ $match: { gender: Object.keys(byGender)[i] } });
    }
  }

  const products = await Product.aggregate(pipeline);
  if (!products) {
    res.status(400);
    throw new Error('Product not found');
  }

  res.status(200).json({
    totalProductsCount: !products[0].totalProductsCount.length ? 0 : products[0].totalProductsCount[0].totalProducts,
    inStockCount: !products[0].inStockCount.length ? 0 : products[0].inStockCount[0].inStock,
    newInCount: !products[0].newInCount.length ? 0 : products[0].newInCount[0].newIn,
    //SIZE
    sizeCount: {
      sizeXScount: !products[0].sizeXScount.length ? 0 : products[0].sizeXScount[0].XS,
      sizeScount: !products[0].sizeScount.length ? 0 : products[0].sizeScount[0].S,
      sizeMcount: !products[0].sizeMcount.length ? 0 : products[0].sizeMcount[0].M,
      sizeLcount: !products[0].sizeLcount.length ? 0 : products[0].sizeLcount[0].L,
      sizeXLcount: !products[0].sizeXLcount.length ? 0 : products[0].sizeXLcount[0].XL,
    },
    //MATERIAL
    materialCount: {
      countCashmere: !products[0].countCashmere.length ? 0 : products[0].countCashmere[0].Cashmere,
      countCotton: !products[0].countCotton.length ? 0 : products[0].countCotton[0].Cotton,
      countPolyester: !products[0].countPolyester.length ? 0 : products[0].countPolyester[0].Polyester,
      countLeather: !products[0].countLeather.length ? 0 : products[0].countLeather[0].Leather,
      countRubber: !products[0].countRubber.length ? 0 : products[0].countRubber[0].Rubber,
      countDenim: !products[0].countDenim.length ? 0 : products[0].countDenim[0].Denim,
      countWool: !products[0].countWool.length ? 0 : products[0].countWool[0].Wool,
      countAcrylic: !products[0].countAcrylic.length ? 0 : products[0].countAcrylic[0].Acrylic,
      countSilk: !products[0].countSilk.length ? 0 : products[0].countSilk[0].Silk,
      countSuede: !products[0].countSuede.length ? 0 : products[0].countSuede[0].Suede,
      countSpandex: !products[0].countSpandex.length ? 0 : products[0].countSpandex[0].Spandex,
    },
    //GENDER
    genderCount: {
      countWoman: !products[0].countWoman.length ? 0 : products[0].countWoman[0].Woman,
      countMan: !products[0].countMan.length ? 0 : products[0].countMan[0].Man,
      countOlderBoys: !products[0].countOlderBoys.length ? 0 : products[0].countOlderBoys[0].OlderBoys,
      countYoungerBoys: !products[0].countYoungerBoys.length ? 0 : products[0].countYoungerBoys[0].YoungerBoys,
      countUnisex: !products[0].countUnisex.length ? 0 : products[0].countUnisex[0].Unisex,
    },
    products: products[0].data,
  });
});

module.exports = {
  getProducts,
};
