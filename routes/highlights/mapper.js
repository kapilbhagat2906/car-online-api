var highlightsModel = require('./highlightsModel.js');

var mapper = (obj) => {
    return new highlightsModel({
        itemId : obj.itemId,
        itemType : obj.itemType,
        infoLink : obj.infoLink,
        field_image : {
            'xs' : obj.imageXS,
            'sm' : obj.imageSM,
            'lg' : obj.imageLG
        }
    });
}

var keyField = 'itemId';
module.exports = { mapper, keyField};