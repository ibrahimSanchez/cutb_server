const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);
const { Province } = require("./province");


const Municipality = sequelize.define("municipalitie", {

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

// Relacion con otras tablas
Municipality.belongsTo(Province, { foreignKey: 'provinceId' });



Municipality.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Municipality }; 







// Crear la tabla
// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Modelo sincronizado correctamente');
//         // Insertar los roles
//         Municipality.bulkCreate([
//             { name: 'Pinar del Río', provinceId: 1 },
//   { name: 'Consolación del Sur', provinceId: 1 },
//   { name: 'Guane', provinceId: 1 },
//   { name: 'Los Palacios', provinceId: 1 },
//   { name: 'Mantua', provinceId: 1 },
//   { name: 'Minas de Matahambre', provinceId: 1 },
//   { name: 'San Juan y Martínez', provinceId: 1 },
//   { name: 'San Luis', provinceId: 1 },
//   { name: 'Sandino', provinceId: 1 },
//   { name: 'Viñales', provinceId: 1 },

//   // Municipios de Artemisa (provinceId = 2)
//   { name: 'Alquízar', provinceId: 2 },
//   { name: 'Artemisa', provinceId: 2 },
//   { name: 'Bauta', provinceId: 2 },
//   { name: 'Caimito', provinceId: 2 },
//   { name: 'Guanajay', provinceId: 2 },
//   { name: 'Güira de Melena', provinceId: 2 },
//   { name: 'Mariel', provinceId: 2 },
//   { name: 'San Antonio de los Baños', provinceId: 2 },
//   { name: 'Bahía Honda', provinceId: 2 },
//   { name: 'Candelaria', provinceId: 2 },

//   // Municipios de La Habana (provinceId = 3)
//   { name: 'Arroyo Naranjo', provinceId: 3 },
//   { name: 'Boyeros', provinceId: 3 },
//   { name: 'Centro Habana', provinceId: 3 },
//   { name: 'Cerro', provinceId: 3 },
//   { name: 'Cotorro', provinceId: 3 },
//   { name: 'Diez de Octubre', provinceId: 3 },
//   { name: 'Guanabacoa', provinceId: 3 },
//   { name: 'Habana del Este', provinceId: 3 },
//   { name: 'Habana Vieja', provinceId: 3 },
//   { name: 'La Lisa', provinceId: 3 },
//   { name: 'Marianao', provinceId: 3 },
//   { name: 'Playa', provinceId: 3 },
//   { name: 'Plaza de la Revolución', provinceId: 3 },
//   { name: 'Regla', provinceId: 3 },
//   { name: 'San Miguel del Padrón', provinceId: 3 },

//   // Municipios de Mayabeque (provinceId = 4)
//   { name: 'Batabanó', provinceId: 4 },
//   { name: 'Bejucal', provinceId: 4 },
//   { name: 'Güines', provinceId: 4 },
//   { name: 'Jaruco', provinceId: 4 },
//   { name: 'Madruga', provinceId: 4 },
//   { name: 'Melena del Sur', provinceId: 4 },
//   { name: 'Nueva Paz', provinceId: 4 },
//   { name: 'Quivicán', provinceId: 4 },
//   { name: 'San José de las Lajas', provinceId: 4 },
//   { name: 'San Nicolás', provinceId: 4 },
//   { name: 'Santa Cruz del Norte', provinceId: 4 },

//   // Municipios de Matanzas (provinceId = 5)
//   { name: 'Cárdenas', provinceId: 5 },
//   { name: 'Ciénaga de Zapata', provinceId: 5 },
//   { name: 'Colón', provinceId: 5 },
//   { name: 'Jagüey Grande', provinceId: 5 },
//   { name: 'Jovellanos', provinceId: 5 },
//   { name: 'Limonar', provinceId: 5 },
//   { name: 'Martí', provinceId: 5 },
//   { name: 'Matanzas', provinceId: 5 },
//   { name: 'Pedro Betancourt', provinceId: 5 },
//   { name: 'Perico', provinceId: 5 },
//   { name: 'Unión de Reyes', provinceId: 5 },

//   // Municipios de Cienfuegos (provinceId = 6)
//   { name: 'Aguada de Pasajeros', provinceId: 6 },
//   { name: 'Cienfuegos', provinceId: 6 },
//   { name: 'Cruces', provinceId: 6 },
//   { name: 'Cumanayagua', provinceId: 6 },
//   { name: 'Lajas', provinceId: 6 },
//   { name: 'Palmira', provinceId: 6 },
//   { name: 'Rodas', provinceId: 6 },

//   // Municipios de Villa Clara (provinceId = 7)
//   { name: 'Caibarién', provinceId: 7 },
//   { name: 'Camajuaní', provinceId: 7 },
//   { name: 'Cifuentes', provinceId: 7 },
//   { name: 'Corralillo', provinceId: 7 },
//   { name: 'Encrucijada', provinceId: 7 },
//   { name: 'Manicaragua', provinceId: 7 },
//   { name: 'Placetas', provinceId: 7 },
//   { name: 'Quemado de Güines', provinceId: 7 },
//   { name: 'Remedios', provinceId: 7 },
//   { name: 'Sagua la Grande', provinceId: 7 },
//   { name: 'Santa Clara', provinceId: 7 },
//   { name: 'Santo Domingo', provinceId: 7 },

//   // Municipios de Sancti Spíritus (provinceId = 8)
//   { name: 'Cabaiguán', provinceId: 8 },
//   { name: 'Fomento', provinceId: 8 },
//   { name: 'Jatibonico', provinceId: 8 },
//   { name: 'La Sierpe', provinceId: 8 },
//   { name: 'Sancti Spíritus', provinceId: 8 },
//   { name: 'Taguasco', provinceId: 8 },
//   { name: 'Trinidad', provinceId: 8 },
//   { name: 'Yaguajay', provinceId: 8 },

//   // Municipios de Ciego de Ávila (provinceId = 9)
//   { name: 'Baraguá', provinceId: 9 },
//   { name: 'Bolivia', provinceId: 9 },
//   { name: 'Ciego de Ávila', provinceId: 9 },
//   { name: 'Chambas', provinceId: 9 },
//   { name: 'Ciro Redondo', provinceId: 9 },
//   { name: 'Florencia', provinceId: 9 },
//   { name: 'Majagua', provinceId: 9 },
//   { name: 'Morón', provinceId: 9 },
//   { name: 'Primero de Enero', provinceId: 9 },
//   { name: 'Venezuela', provinceId: 9 },

//   // Municipios de Camagüey (provinceId = 10)
//   { name: 'Camagüey', provinceId: 10 },
//   { name: 'Carlos Manuel de Céspedes', provinceId: 10 },
//   { name: 'Esmeralda', provinceId: 10 },
//   { name: 'Florida', provinceId: 10 },
//   { name: 'Guaimaro', provinceId: 10 },
//   { name: 'Jimaguayú', provinceId: 10 },
//   { name: 'Minas', provinceId: 10 },
//   { name: 'Najasa', provinceId: 10 },
//   { name: 'Nuevitas', provinceId: 10 },
//   { name: 'Santa Cruz del Sur', provinceId: 10 },
//   { name: 'Sibanicú', provinceId: 10 },
//   { name: 'Sierra de Cubitas', provinceId: 10 },
//   { name: 'Vertientes', provinceId: 10 },

//   // Municipios de Las Tunas (provinceId = 11)
//   { name: 'Amancio', provinceId: 11 },
//   { name: 'Colombia', provinceId: 11 },
//   { name: 'Jesús Menéndez', provinceId: 11 },
//   { name: 'Jobabo', provinceId: 11 },
//   { name: 'Las Tunas', provinceId: 11 },
//   { name: 'Majibacoa', provinceId: 11 },
//   { name: 'Manatí', provinceId: 11 },
//   { name: 'Puerto Padre', provinceId: 11 },

//   // Municipios de Holguín (provinceId = 12)
//   { name: 'Antilla', provinceId: 12 },
//   { name: 'Báguanos', provinceId: 12 },
//   { name: 'Banes', provinceId: 12 },
//   { name: 'Cacocum', provinceId: 12 },
//   { name: 'Calixto García', provinceId: 12 },
//   { name: 'Cueto', provinceId: 12 },
//   { name: 'Frank País', provinceId: 12 },
//   { name: 'Gibara', provinceId: 12 },
//   { name: 'Holguín', provinceId: 12 },
//   { name: 'Mayarí', provinceId: 12 },
//   { name: 'Moa', provinceId: 12 },
//   { name: 'Rafael Freyre', provinceId: 12 },
//   { name: 'Sagua de Tánamo', provinceId: 12 },
//   { name: 'Urbano Noris', provinceId: 12 },

//   // Municipios de Granma (provinceId = 13)
//   { name: 'Bartolomé Masó', provinceId: 13 },
//   { name: 'Bayamo', provinceId: 13 },
//   { name: 'Buey Arriba', provinceId: 13 },
//   { name: 'Campechuela', provinceId: 13 },
//   { name: 'Cauto Cristo', provinceId: 13 },
//   { name: 'Guisa', provinceId: 13 },
//   { name: 'Jiguaní', provinceId: 13 },
//   { name: 'Manzanillo', provinceId: 13 },
//   { name: 'Media Luna', provinceId: 13 },
//   { name: 'Niquero', provinceId: 13 },
//   { name: 'Pilón', provinceId: 13 },
//   { name: 'Río Cauto', provinceId: 13 },
//   { name: 'Yara', provinceId: 13 },

//   // Municipios de Santiago de Cuba (provinceId = 14)
//   { name: 'Contramaestre', provinceId: 14 },
//   { name: 'Guamá', provinceId: 14 },
//   { name: 'Mella', provinceId: 14 },
//   { name: 'Palma Soriano', provinceId: 14 },
//   { name: 'San Luis', provinceId: 14 },
//   { name: 'Santiago de Cuba', provinceId: 14 },
//   { name: 'Segundo Frente', provinceId: 14 },
//   { name: 'Songo-La Maya', provinceId: 14 },
//   { name: 'Tercer Frente', provinceId: 14 },

//   // Municipios de Guantánamo (provinceId = 15)
//   { name: 'Baracoa', provinceId: 15 },
//   { name: 'Caimanera', provinceId: 15 },
//   { name: 'El Salvador', provinceId: 15 },
//   { name: 'Guantánamo', provinceId: 15 },
//   { name: 'Imías', provinceId: 15 },
//   { name: 'Maisí', provinceId: 15 },
//   { name: 'Manuel Tames', provinceId: 15 },
//   { name: 'Niceto Pérez', provinceId: 15 },
//   { name: 'San Antonio del Sur', provinceId: 15 },
//   { name: 'Yateras', provinceId: 15 },

//   // Municipios de Isla de la Juventud (provinceId = 16)
//   { name: 'Isla de la Juventud', provinceId: 16 }
//         ])
//             .then(() => {
//                 console.log('Municipios insertados con éxito');
//             })
//             .catch((error) => {
//                 console.error('Error al insertar los municipios:', error);
//             });
//     })
//     .catch((error) => {
//         console.error('Error al sincronizar el modelo:', error);
//     })

