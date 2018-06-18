var modelDetailsModel = require('./modelDetailsModel.js');

var mapper = (obj) => {
    return new modelDetailsModel({
        modelId : obj.modelId,
        description : obj.description,
        price : obj.price,
        mileage : obj.mileage,
        engine : obj.engine,
        gears : obj.gears,
        serviceCost : obj.serviceCost,
        cylinders : obj.cylinders,
        seating : obj.seating,
        powerSteering : (obj.powerSteering && (obj.powerSteering === true || obj.powerSteering.toUpperCase() === 'TRUE')) || false,
        centeralLock : (obj.centeralLock && (obj.centeralLock === true || obj.centeralLock.toUpperCase() === 'TRUE')) || false,
        brakeAssist : (obj.brakeAssist && (obj.brakeAssist === true || obj.brakeAssist.toUpperCase() === 'TRUE')),
        airbags : (obj.airbags && (obj.airbags === true || obj.airbags.toUpperCase() === 'TRUE')) || false,
        parkingSensor : (obj.parkingSensor && (obj.parkingSensor === true || obj.parkingSensor.toUpperCase() === 'TRUE')) || false,
        topSpeed : obj.topSpeed,
        bhp : obj.bhp,
        images : (obj.images && obj.images.split(',')) || []
    });
};

var keyField = 'modelId';
module.exports = { mapper, keyField};