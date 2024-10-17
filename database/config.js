const { Client } = require('pg');

const dbConnection = async () => {

    const connectionData = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    }

    const client = new Client(connectionData, {})

    try {
        await client.connect();
        console.log(`bd ${process.env.DB_NAME} conectada`)
    } catch (error) {
        console.log('error de conneccion con la bd', error)
    }

}



module.exports = {
    dbConnection
};