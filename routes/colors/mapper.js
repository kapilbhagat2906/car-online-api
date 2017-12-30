var colorsModel = require('./colorsModel.js');

var mapper = (obj) => {
    return new colorsModel({
        modelId: obj.modelId,
        variantId: obj.variantId,
        code: obj.code,
        name: obj.name
    });
}

var keyField = 'code';
module.exports = { mapper, keyField};