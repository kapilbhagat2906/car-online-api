var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var highlightsSchema = new Schema({
    'itemId' : String,
    'itemType' : String,
    'field_image' : String,
    'info': {
        'link': String,
        'caption': String,
        'details': String
    }
});

module.exports = mongoose.model('highlights', highlightsSchema);
