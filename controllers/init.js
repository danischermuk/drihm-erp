var mongoose        = require('mongoose');
var User            = require('../models/user');
var Building        = require('../models/building');
var Appliance       = require('../models/appliance');




// Inicializamos la DB
// Connect to the db MongoDB
exports.initMongoDB = function () {
	mongoose.connect('mongodb://localhost:27017/drihm');
};


// Inicializamos algún usuario con privilegios administrativos
exports.initUsers = function () {
	User
	.find({admin: true})
	.exec(function(err, users) {
		if (err)
			console.log(err);
		else
		{
			if (users.length == 0) 
			{
				var user = new User();
  				// Set the default user properties
  				user.name     = "rootuser";
  				user.username = "root";
  				user.password = "root";
  				user.email    = "root@root.com";
  				user.admin    = true;

  				// Save the user and check for errors
  				user.save(function(err) {
  					if (err)
  						console.log(err);
  					else
  						console.log({ message: 'Root user created', data: user });
  				});
  			}
  		}
  	});
}; 
