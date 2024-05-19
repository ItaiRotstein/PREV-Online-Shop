const asyncHandler = require('express-async-handler');
const Product = require('../../models/productModel');

// @desc    Get products
// @route   GET /api/products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  console.log(req.query);
  const {
    fetchItems,
    q,
    instock,
    newin,
    sort,
    size,
    material,
    gender,
    category,
    price_min,
    price_max
  } = req.query;

  const pipeline = [
    {
      $facet: {
        data: [{ $limit: Number(fetchItems) }],
        totalProductsCount: [{ $count: 'totalProducts' }],
      }
    },
  ];

  //Search Query
  if (q) {
    pipeline.unshift({ $match: { name: { $regex: q, $options: 'i' } } });
  }

  //Sort
  switch (sort) {
    case 'popular':
      pipeline.unshift({ $sort: { popularity: -1 } });
      break;
    case 'alphabet':
      pipeline.unshift({ $sort: { name: 1 } });
      break;
    case 'price':
      pipeline.unshift({ $sort: { price: 1 } });
      break;
    case 'price-rev':
      pipeline.unshift({ $sort: { price: -1 } });
      break;
    default: return;
  }

  if (instock) {
    pipeline.unshift({ $match: { inStock: true } });
  }

  if (newin) {
    pipeline.unshift({ $match: { newIn: true } });
  }

  //SIZES
  if (size) {
    if (Array.isArray(size)) {
      for (let i = 0; i < size.length; i++) {
        pipeline.unshift({ $match: { sizes: size[i] } });
      }
    } else {
      pipeline.unshift({ $match: { sizes: size } });
    }
  }
  //MATERIAL
  if (material) {
    if (Array.isArray(material)) {
      for (let i = 0; i < material.length; i++) {
        pipeline.unshift({ $match: { material: material[i] } });
      }
    } else {
      pipeline.unshift({ $match: { material: material } });
    }
  }
  //GENDER
  if (gender) {
    if (Array.isArray(gender)) {
      for (let i = 0; i < gender.length; i++) {
        pipeline.unshift({ $match: { gender: gender[i] } });
      }
    } else {
      pipeline.unshift({ $match: { gender: gender } });
    }
  }

  //CATEGORY  
  if (category) {
    if (Array.isArray(category)) {
      for (let i = 0; i < category.length; i++) {
        pipeline.unshift({ $match: { category: category[i] } });
      }
    } else {
      pipeline.unshift({ $match: { category: category } });
    }
  }
  
  //PRICE_MIN
  if (price_min) {
    pipeline.unshift({ $match: { price: { $gte: Number(price_min) } } });
  }
  //PRICE_MAX
  if (price_max) {
    pipeline.unshift({ $match: { price: { $lte: Number(price_max) } } });
  }

  const products = await Product.aggregate(pipeline);
  if (!products) {
    res.status(400);
    throw new Error('Product not found');
  }

  res.status(200).json({
    totalProductsCount: !products[0].totalProductsCount.length ? 0 : products[0].totalProductsCount[0].totalProducts,
    products: products[0].data,
  });
});

const getProductsData = asyncHandler(async (req, res) => {

  const pipeline = [
    {
      $facet: {
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
        countOlderBoys: [{ $match: { gender: 'Older_Boys' } }, { $count: 'OlderBoys' }],
        countYoungerBoys: [{ $match: { gender: 'Younger_Boys' } }, { $count: 'YoungerBoys' }],
        countUnisex: [{ $match: { gender: 'Unisex' } }, { $count: 'Unisex' }],
        //CATEGORY
        Shirts: [{ $match: { category: "Shirts", } }, { $count: "Shirts", }],
        Dresses: [{ $match: { category: "Dresses", } }, { $count: "Dresses", }],
        Jeans: [{ $match: { category: "Jeans", } }, { $count: "Jeans", }],
        Sweaters: [{ $match: { category: "Sweaters", } }, { $count: "Sweaters", }],
        Hoodies: [{ $match: { category: "Hoodies", } }, { $count: "Hoodies", }],
        T_Shirts: [{ $match: { category: "T-Shirts", } }, { $count: "T-Shirts", }],
        Jackets: [{ $match: { category: "Jackets", } }, { $count: "Jackets", }],
        Blouses: [{ $match: { category: "Blouses", } }, { $count: "Blouses", }],
        Pants: [{ $match: { category: "Pants", } }, { $count: "Pants", }],
        Blazers: [{ $match: { category: "Blazers", } }, { $count: "Blazers", }],
        Accessories: [{ $match: { category: "Accessories", } }, { $count: "Accessories", }],
        Socks: [{ $match: { category: "Socks", } }, { $count: "Socks", }],
        Bags: [{ $match: { category: "Bags", } }, { $count: "Bags", }],
        Vests: [{ $match: { category: "Vests", } }, { $count: "Vests", }],
        Hats: [{ $match: { category: "Hats", } }, { $count: "Hats", }],
        Shoes: [{ $match: { category: "Shoes", } }, { $count: "Shoes", }],
        Shorts: [{ $match: { category: "Shorts", } }, { $count: "Shorts", }],
        Tops: [{ $match: { category: "Tops", } }, { $count: "Tops", }],
        Polos: [{ $match: { category: "Polos", } }, { $count: "Polos", }],
      }
    },
  ];

  const products = await Product.aggregate(pipeline);
  if (!products) {
    res.status(400);
    throw new Error('Product not found');
  }

  res.status(200).json({
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
    //CATEGORY
    categoryCount: {
      Shirts: !products[0].Shirtslength ? 0 : products[0].Shirts[0].Shirts,
      Dresses: !products[0].Dresses.length ? 0 : products[0].Dresses[0].Dresses,
      Jeans: !products[0].Jeans.length ? 0 : products[0].Jeans[0].Jeans,
      Sweaters: !products[0].Sweaters.length ? 0 : products[0].Sweaters[0].Sweaters,
      Hoodies: !products[0].Hoodies.length ? 0 : products[0].Hoodies[0].Hoodies,
      T_Shirts: !products[0].T_Shirts.length ? 0 : products[0].T_Shirts[0].T_Shirts,
      Jackets: !products[0].Jackets.length ? 0 : products[0].Jackets[0].Jackets,
      Blouses: !products[0].Blouses.length ? 0 : products[0].Blouses[0].Blouses,
      Pants: !products[0].Pants.length ? 0 : products[0].Pants[0].Pants,
      Blazers: !products[0].Blazers.length ? 0 : products[0].Blazers[0].Blazers,
      Accessories: !products[0].Accessories.length ? 0 : products[0].Accessories[0].Accessories,
      Socks: !products[0].Socks.length ? 0 : products[0].Socks[0].Socks,
      Bags: !products[0].Bags.length ? 0 : products[0].Bags[0].Bags,
      Vests: !products[0].Vests.length ? 0 : products[0].Vests[0].Vests,
      Hats: !products[0].Hats.length ? 0 : products[0].Hats[0].Hats,
      Shoes: !products[0].Shoes.length ? 0 : products[0].Shoes[0].Shoes,
      Shorts: !products[0].Shorts.length ? 0 : products[0].Shorts[0].Shorts,
      Tops: !products[0].Tops.length ? 0 : products[0].Tops[0].Tops,
      Polos: !products[0].Polos.length ? 0 : products[0].Polos[0].Polos,
    },
  });
});

module.exports = {
  getProducts,
  getProductsData
};
