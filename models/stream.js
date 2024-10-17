const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Stream = sequelize.define('stream', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stream: {
        type: DataTypes.STRING
    }
});


// sequelize.sync({force: true})
//     .then(() => {
//         console.log('Modelo sincronizado correctamente');
//         // Insertar los roles
//         Stream.bulkCreate([
//             { stream: 'Ágil' },
//             { stream: 'Ágil 2' },
//             { stream: 'Ágil 3' }
//         ])
//             .then(() => {
//                 console.log('bien');
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     })
//     .catch((error) => {
//         console.error('Error al sincronizar el modelo:', error);
//     })



Stream.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Stream };