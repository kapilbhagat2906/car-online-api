var modelsModel = require('./modelsModel.js');

var mapper = (obj) => {
    return new modelsModel({
        brandId: obj.brandId,
        id: obj.id,
        code: obj.code,
        name: obj.name,
        launchStatus: obj.launchStatus,
        isTrending: (obj.trending === true || obj.trending === 'true' || obj.trending === 'TRUE')
    });
};

var keyField = 'id';
module.exports = { mapper, keyField};