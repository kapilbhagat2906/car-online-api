var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var variantsSchema = new Schema({
	'modelId' : {type: String, required:true},
	'id' : {type: String, required:true},
	'name' : String,
	'code' : String,
	'price': Number,
	'colors': Array,
	'tags': Array,
	'images': Array,
	'description': String,
	'mileage': String,
	'engine': String,
	'gears': Number,
	'cylinders': Number,
	'seating': Number,
	'powerSteering': Boolean,
	'centralLock': Boolean,
	'brakeAssist': Boolean,
	'airbags': Number,
	'parkingSensor': Boolean,
	'topSpeed': Number,
	'bhp': Number,
	'powerWindow': Boolean,
	'fuelType': String,
	'transmissionType': String
});

module.exports = mongoose.model('variants', variantsSchema);
