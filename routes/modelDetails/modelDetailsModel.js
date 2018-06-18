var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var modelDetailsSchema = new Schema({
	'modelId' : String,
	'description' : String,
	'price' : String,
	'mileage' : String,
	'engine' : String,
	'gears' : Number,
	'serviceCost' : Number,
	'cylinders' : Number,
	'seating' : Number,
	'powerSteering' : Boolean,
	'centeralLock' : Boolean,
	'brakeAssist' : Boolean,
	'airbags' : Boolean,
	'parkingSensor' : Boolean,
	'topSpeed' : Number,
	'bhp' : Number,
	'images' : Array
});

module.exports = mongoose.model('modelDetails', modelDetailsSchema);
