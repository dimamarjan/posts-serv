const app = require('../app');
const db = require('../db/db');
require('dotenv').config();

const { PORT } = process.env;

const CURRENT_PORT = PORT || 3000;

db.then(() => {
    app.listen(PORT, async () => {
        console.log(`Server running. Use our API on port: ${CURRENT_PORT}`);
    });
}).catch((err) => {
    console.log(err);
});
