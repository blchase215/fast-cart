// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belong to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
})

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    unique: false
  },
    as: "genre"
});

Tag.belongsToMany(Product, {
  through:{
    model: ProductTag,
    unique: false
  },
    as: "aspect"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
