var brandsModel = require('./brandsModel.js');

var mapper = (obj) => {
    return new brandsModel({
        id: obj.id,
        code: obj.code,
        name: obj.name,
        isTrending: (obj.trending === true || obj.trending === 'true' || obj.trending === 'TRUE')
    });
}

var keyField = 'id';
module.exports = { mapper, keyField};