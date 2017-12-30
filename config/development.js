module.exports = {
    mongodb: {
        connectionString: process.env.DATABASE_URL || 'mongodb://localhost/carOnlineDB'
    },
    utils: {
        excel: {
            filepath: 'D:/Kapil/Projects/CarOnline/Data.xlsx'
        }
    }
};