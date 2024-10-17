const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Curse_level = sequelize.define('curse_level', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    level: {
        type: DataTypes.STRING
    }
});


// sequelize.sync({force: true})
//     .then(() => {
//         console.log('Modelo sincronizado correctamente');
//         // Insertar los roles
//         curse_level.bulkCreate([
//             { level: 'Base' },
//             { level: 'Intermedio' },
//             { level: 'Avanzado' }
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



Curse_level.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Curse_level };