var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carSchema = new Schema({
	'id' : String,
	'name' : String,
	'code' : String,
	'price' : Number,
	'info' : String,
	'field_cover_image' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'urls'
	},
	'models' : Array,
	'related' : Array
});

module.exports = mongoose.model('car', carSchema);
