var carsModel = require('./carsModel.js');

module.exports = (obj) => {
    return new carsModel({
        id: obj.id,
        code: obj.code,
        name: obj.name,
        price: obj.price,
        info: obj.info,
        field_cover_image: {
            xs: obj.imageXS,
            sm: obj.imageSM,
            lg: obj.imageLG
        }
    });
}