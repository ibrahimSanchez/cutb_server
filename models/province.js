const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Province = sequelize.define("province", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

});




Province.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Province }; 







// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Modelo sincronizado correctamente');
//         // Insertar los roles
//         Province.bulkCreate([
//             { name: 'Pinar del Río' },
//             { name: 'Artemisa' },
//             { name: 'La Habana' },
//             { name: 'Mayabeque' },
//             { name: 'Matanzas' },
//             { name: 'Cienfuegos' },
//             { name: 'Villa Clara' },
//             { name: 'Sancti Spíritus' },
//             { name: 'Ciego de Ávila' },
//             { name: 'Camagüey' },
//             { name: 'Las Tunas' },
//             { name: 'Holguín' },
//             { name: 'Granma' },
//             { name: 'Santiago de Cuba' },
//             { name: 'Guantánamo' },
//             { name: 'Isla de la Juventud' }
//         ])
//             .then(() => {
//                 console.log('Provincias insertadas con éxito');
//             })
//             .catch((error) => {
//                 console.error('Error al insertar las provincias:', error);
//             });
//     })
//     .catch((error) => {
//         console.error('Error al sincronizar el modelo:', error);
//     })
