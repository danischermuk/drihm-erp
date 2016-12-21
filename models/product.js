var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;


var productSchema = new Schema({  
  name: 			{type:String, unique:true, required:true},
  suppliers:		[{type : mongoose.Schema.ObjectId, ref : 'Supplier'}],
  supplierCode: 	String,
  internalCode: 	String,
  description: 		String,
  FOBPrice: 		[{price: Number, date: Date}],
  consumables:		[{type : mongoose.Schema.ObjectId, ref : 'Product'}],
  spareParts:		[{type : mongoose.Schema.ObjectId, ref : 'Product'}],
  relatedProducts: 	[{type : mongoose.Schema.ObjectId, ref : 'Product'}],
  specialRequests: 	String, // TODO: hacer esto bien.
  customsRequests: 	String  // TODO: hacer esto bien.
});

module.exports = mongoose.model('Product', productSchema);