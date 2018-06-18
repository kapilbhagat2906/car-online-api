var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var modelsSchema = new Schema({
	'brandId' : {type: String, required:true},
	'id' : {type: String, required:true},
	'name' : String,
	'code' : String,
	'launchStatus' : String,
	'isTrending' : Boolean,
	'launchDate': Date
});

module.exports = mongoose.model('models', modelsSchema);
