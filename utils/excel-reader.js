var XLSX = require("xlsx"),
    fs = require('fs'),
    _ = require("lodash"),
    config = require("../config"),
    mongodb = require('../mongoose'),
    filepath = config.utils.excel.filepath;

try {
    var workbook = XLSX.readFile(filepath),
        worksheetNames = workbook.SheetNames,
        recordsCount = 0;

    mongodb.init(() => {
        _.forEach(worksheetNames, (worksheetName) => {
            var modelDirectory = `routes/${worksheetName}`,
                mapperFilePath = `${modelDirectory}/mapper`,
                modelFilePath = `${modelDirectory}/${worksheetName}Model`;

            fs.stat(`${mapperFilePath}.js`, (error, stats) => {
                if(error) {
                    return;
                }
                var mapperConfig = require(`../${mapperFilePath}`),
                    mapper = mapperConfig && mapperConfig.mapper,
                    mapKey = mapperConfig && mapperConfig.keyField,
                    model = require(`../${modelFilePath}`),
                    worksheet = workbook.Sheets[worksheetName],
                    worksheetData = XLSX.utils.sheet_to_json(worksheet),
                    documentsInsertedCount = 0;

                if(mapper && typeof mapper === 'function') {
                    _.forEach(worksheetData, (data) => {
                        let query = {};
                        model.deleteMany(query, (error) => {
                            if(error) {
                                console.log(error);
                                return;
                            }
                        });

                        if(data.dbStatus !== 'delete') {
                            var mappedData = mapper(data);
                            query[mapKey] = mappedData[mapKey];

                            documentsInsertedCount++;
                            recordsCount++;
                            mappedData.save((error, result) => {
                                recordsCount--;
                                if (error) {
                                    console.log(error);
                                    return;
                                }
                            });
                        }
                    });
                    console.log(`Inserted/Updated ${documentsInsertedCount} records in '${worksheetName}' collection.`);
                    if(documentsInsertedCount < worksheetData.length) {
                        console.log(`Deleted ${worksheetData.length - documentsInsertedCount} old records from '${worksheetName}' collection.`);
                    }
                }
            });
        });

        var _intervalPromise = setInterval(() => {
            if(recordsCount === 0) {
                mongodb.disconnect();
                clearInterval(_intervalPromise);
            }
        }, 500);
    });

} catch(exception) {
    console.log(exception);
}