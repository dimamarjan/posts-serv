const mongoose = require('mongoose');
require('dotenv').config();

const { URL_DB } = process.env;

const db = mongoose.connect(URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 5,
});

mongoose.connection.on('connected', (_e) => {
    console.log('Database connection successful');
});

process.on('SIGINT', async () => {
    mongoose.connection.close(() => {
        process.exit(1);
    });
});

module.exports = db;
