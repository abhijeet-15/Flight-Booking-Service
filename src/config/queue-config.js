const amqplib = require('amqplib');
const { RABBIT_MQ,NOTIFICATION_QUEUE } = require('./server-config');

let channel, connection;

async function connectQueue() {
    try {
        connection = await amqplib.connect(RABBIT_MQ);
        channel = await connection.createChannel();

        await channel.assertQueue(NOTIFICATION_QUEUE);
    } catch (error) {
        console.log(error);
    }
}

async function sendData(data) {
    try {
        await channel.sendToQueue(NOTIFICATION_QUEUE, Buffer.from(JSON.stringify(data)));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connectQueue,
    sendData,
}