var highlightsModel = require('./highlightsModel.js');

var mapper = (obj) => {
    return new highlightsModel({
        itemId : obj.itemId,
        itemType : obj.itemType,
        field_image : obj.image,
        info : {
            link: obj.infoLink,
            caption: obj.infoCaption,
            details: obj.infoDetails
        }
    });
}

var keyField = 'itemId';
module.exports = { mapper, keyField};