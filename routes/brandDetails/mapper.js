var brandDetailsModel = require('./brandDetailsModel.js');

var mapper = (obj) => {
    return new brandDetailsModel({
        brandId: obj.brandId,
        title: obj.title,
        description: obj.description,
        brands: (obj.brands && convertStringToArray(obj.brands, ',')) || [],
        models: (obj.models && convertStringToArray(obj.models, ',')) || []
    });
}

var convertStringToArray = (str, delimiter) => {
    var arr = [];

    if (!str || !delimiter || str.indexOf(delimiter) === -1) {
        arr.push(str);
        return arr;
    } else {
        arr = str.split(',').map(elem => elem.trim());
    }

    return arr;
};

var keyField = 'brandId';
module.exports = { mapper, keyField};