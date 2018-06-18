var modelsModel = require('./modelsModel.js');
var moment = require('moment');

var mapper = (obj) => {
    return new modelsModel({
        brandId: obj.brandId,
        id: obj.id,
        code: obj.code,
        name: obj.name,
        launchStatus: obj.launchStatus,
        isTrending: (obj.trending === true || obj.trending === 'true' || obj.trending === 'TRUE'),
        launchDate: (obj.launchDate && moment(obj.launchDate, 'DD/MM/YYYY'))
    });
};

var keyField = 'id';
module.exports = { mapper, keyField};