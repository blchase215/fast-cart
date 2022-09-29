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
  foreignKey: 'category_id',
  // if a category is deleted, delete it's associated products
  onDelete: 'CASCADE'
})

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through:{
    model: ProductTag,
    unique: false
  },
    as: "description"
});

// Tags belong to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through:{
    model: ProductTag,
    unique: false
  },
    as: "taggedProducts"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
