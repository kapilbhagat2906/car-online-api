var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var brandDetailsSchema = new Schema({
	'brandId' : String,
	'title' : String,
	'description' : String,
	'brands' : [],
	'models' : []
});

module.exports = mongoose.model('brandDetails', brandDetailsSchema);
