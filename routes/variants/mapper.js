var variantsModel = require('./variantsModel.js');

var mapper = (obj) => {
    return new variantsModel({
        modelId: obj.modelId,
        id: obj.id,
        code: obj.code,
        name: obj.name
    });
}

var keyField = 'id';
module.exports = { mapper, keyField};