var colorsModel = require('./colorsModel.js');

var mapper = (obj) => {
    return new colorsModel({
        id: obj.id,
        code: obj.code,
        name: obj.name
    });
}

var keyField = 'code';
module.exports = { mapper, keyField};