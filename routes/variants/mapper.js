var variantsModel = require('./variantsModel.js');

var mapper = (obj) => {
    return new variantsModel({
        modelId: obj.modelId,
        id: obj.id,
        code: obj.code,
        name: obj.name,
        price: obj.price,
        colors: (obj.colors && obj.colors.split(',')) || [],
        tags: obj.tags,
        images: (obj.images && obj.images.split(',')) || [],
        description: obj.description,
        mileage: obj.mileage,
        engine: obj.engine,
        gears: obj.gears,
        cylinders: obj.cylinders,
        seating: obj.seating,
        powerSteering : (obj.powerSteering && (obj.powerSteering === true || obj.powerSteering.toUpperCase() === 'TRUE')) || false,
        centeralLock : (obj.centeralLock && (obj.centeralLock === true || obj.centeralLock.toUpperCase() === 'TRUE')) || false,
        brakeAssist : (obj.brakeAssist && (obj.brakeAssist === true || obj.brakeAssist.toUpperCase() === 'TRUE')),
        airbags : (obj.airbags && (obj.airbags === true || obj.airbags.toUpperCase() === 'TRUE')) || false,
        parkingSensor : (obj.parkingSensor && (obj.parkingSensor === true || obj.parkingSensor.toUpperCase() === 'TRUE')) || false,
        topSpeed: obj.topSpeed,
        bhp: obj.bhp,
        powerWindow: (obj.powerWindow && (obj.powerWindow === true || obj.powerWindow.toUpperCase() === 'TRUE')),
        fuelType: obj.fuelType,
        transmissionType: obj.transmissionType
    });
}

var keyField = 'id';
module.exports = { mapper, keyField};