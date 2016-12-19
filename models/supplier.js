var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;


var supplierSchema = new Schema({  
  name: 		{type:String, unique:true, required:true},
  address: 		String,
  telephone: 	String,
  fax: 			String, 
  bankInfo: 	String,
  taxId: 		String,
  contact: 		String, // TODO: hacer model de contactos
  priceList: 	String, // TODO: hacer model de price list
  currency: 	String
});

module.exports = mongoose.model('Supplier', supplierSchema);