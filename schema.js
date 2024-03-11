const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Product Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  SKU: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount_id: {
    type: Schema.Types.ObjectId,
    ref: 'Discount',
  },
});

// Product Inventory Schema
const productInventorySchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

// Product Category Schema
const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

// Discount Schema (Assuming a simple discount schema)
const discountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  discount_percent: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
});

const Product = mongoose.model('Product', productSchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = {
  Product,
  ProductInventory,
  ProductCategory,
  Discount,
};
