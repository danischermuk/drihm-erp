// Modules
var mongoose  = require('mongoose');
// MongoDB models
var Supplier  = mongoose.model('Supplier');

// Create endpoint /api/supplier/ for GET
exports.getSuppliers = function(req, res) {
  Supplier.find(function(err, suppliers) {
    if (err)
      res.send(err);

    res.json(suppliers);
  });
};

// Create endpoint /api/supplier for POST
exports.postSupplier = function(req, res) {
  var supplier = new Supplier();
  // Set the supplier properties that came from the POST data
  supplier.name       = req.body.name;
  supplier.address    = req.body.address;
  supplier.telephone  = req.body.telephone;
  supplier.fax        = req.body.fax;
  supplier.bankInfo   = req.body.bankInfo;
  supplier.taxId      = req.body.taxId;
  supplier.contact    = req.body.contact;
  supplier.priceList  = req.body.priceList;
  supplier.currency   = req.body.currency;

  // Save the supplier and check for errors
  supplier.save(function(err) {
    if (err)
      res.send(err);
    else
      res.json(supplier);
  });
};


// Create endpoint /api/supplier/:supplier_id for GET
exports.getSupplier = function(req, res) {
  Supplier.findById(req.params.supplier_id, function(err, supplier) {
    if (err)
      res.send(err);
    else
      res.json(supplier);
  });
};

exports.updateSupplier = function(req, res) {
  Supplier.findById(req.params.supplier_id, function(err, supplier) {
    if (err)
      res.send(err);
    // Aplicar los cambios
    supplier.name       = req.body.name;
    supplier.address    = req.body.address;
    supplier.telephone  = req.body.telephone;
    supplier.fax        = req.body.fax;
    supplier.bankInfo   = req.body.bankInfo;
    supplier.taxId      = req.body.taxId;
    supplier.contact    = req.body.contact;
    supplier.priceList  = req.body.priceList;
    supplier.currency   = req.body.currency;
    // Save
    supplier.save(function(err) {
      if (err)
        res.send(err);
      else
        res.json(supplier);
    });
  }); 
};

// Create endpoint /api/supplier/:supplier_id for DELETE
exports.deleteSupplier = function(req, res) {
  Supplier.findByIdAndRemove(req.params.supplier_id , function(err) {
    if (err)
      res.send(err);
    else
      res.json({ message: 'Supplier removed from the db!' });
  });
};

