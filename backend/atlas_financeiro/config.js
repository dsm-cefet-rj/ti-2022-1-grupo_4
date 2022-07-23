const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    'secretKey': '3456-6453-3456-9706',
    'mongoUrl': `${process.env.MONGO_URL}`
}