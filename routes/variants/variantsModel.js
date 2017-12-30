var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var variantsSchema = new Schema({
	'modelId' : {type: String, required:true},
	'id' : {type: String, required:true},
	'name' : String,
	'code' : String
});

module.exports = mongoose.model('variants', variantsSchema);
