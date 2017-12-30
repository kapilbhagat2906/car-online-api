var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var brandsSchema = new Schema({
	'id' : { type: String, required: true, unique: true },
	'code' : String,
	'name' : String,
	'isTrending': Boolean
});

module.exports = mongoose.model('brands', brandsSchema);
