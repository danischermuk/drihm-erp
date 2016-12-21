// Modules
var mongoose  = require('mongoose');
// MongoDB models
var Product  = mongoose.model('Product');

// Create endpoint /api/product/ for GET
exports.getProducts = function(req, res) {
  Product.find(function(err, prodcut) {
    if (err)
      res.send(err);

    res.json(prodcut);
  });
};

// Create endpoint /api/product for POST
exports.postProduct = function(req, res) {
  var product = new Product();
  product.name            = req.body.name;
  product.suppliers       = req.body.suppliers;
  product.supplierCode    = req.body.supplierCode;
  product.internalCode    = req.body.internalCode;
  product.description     = req.body.description;
  product.FOBPrice        = req.body.FOBPrice;
  product.consumables     = req.body.consumables;
  product.spareParts      = req.body.spareParts;
  product.relatedProducts = req.body.relatedProducts;
  product.specialRequests = req.body.specialRequests;
  product.customsRequests = req.body.customsRequests;

  product.save(function(err) {
    if (err)
      res.send(err);
    else
      res.json(product);
  });
};


// Create endpoint /api/product/:product_id for GET
exports.getProduct = function(req, res) {
  Product.findById(req.params.product_id, function(err, product) {
    if (err)
      res.send(err);
    else
      res.json(product);
  });
};


// Create endpoint /api/product/:product_id for PUT
exports.updateProduct = function(req, res) {
  Product.findById(req.params.product_id, function(err, product) {
    if (err)
      res.send(err);
    // Aplicar los cambios
    product.name            = req.body.name;
    product.suppliers       = req.body.suppliers;
    product.supplierCode    = req.body.supplierCode;
    product.internalCode    = req.body.internalCode;
    product.description     = req.body.description;
    product.FOBPrice        = req.body.FOBPrice;
    product.consumables     = req.body.consumables;
    product.spareParts      = req.body.spareParts;
    product.relatedProducts = req.body.relatedProducts;
    product.specialRequests = req.body.specialRequests;
    product.customsRequests = req.body.customsRequests;
    // Save
    product.save(function(err) {
      if (err)
        res.send(err);
      else
        res.json(product);
    });
  }); 
};

// Create endpoint /api/product/:product_id for DELETE
exports.deleteProduct = function(req, res) {
  Product.findByIdAndRemove(req.params.product_id , function(err) {
    if (err)
      res.send(err);
    else
      res.json({ message: 'Product removed from the db!' });
  });
};

// Create endpoint /api/product/supplier/:supplier_id for GET
exports.getProductsOfSupplier = function(req, res) {
  Product.find({suppliers: {$in: [req.params.supplier_id]}}, function(err, products) {
    if (err)
      res.send(err);
    else
      res.json(products);
  });
};