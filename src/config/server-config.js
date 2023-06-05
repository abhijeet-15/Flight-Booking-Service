const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
    RABBIT_MQ: process.env.RABBIT_MQ,
    NOTIFICATION_QUEUE: process.env.NOTIFICATION_QUEUE
}