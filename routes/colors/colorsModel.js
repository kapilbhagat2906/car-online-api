var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var colorsSchema = new Schema({
	'id' : {type: String, required:true},
	'code' : {type: String, required:true},
	'name' : String
});

module.exports = mongoose.model('colors', colorsSchema);
