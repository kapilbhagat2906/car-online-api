var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var highlightsSchema = new Schema({
    'itemId' : String,
    'itemType' : String,
    'infoLink' : String,
    'field_image' : {
        'xs' : String,
        'sm' : String,
        'lg' : String
    }
});

module.exports = mongoose.model('highlights', highlightsSchema);
