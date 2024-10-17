const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Language = sequelize.define('language', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    language: {
        type: DataTypes.STRING
    }
});


// sequelize.sync({force: true})
//     .then(() => {
//         console.log('Modelo sincronizado correctamente');
//         // Insertar los roles
//         Language.bulkCreate([
//             { language: 'Español' },
//             { language: 'Inglés' },
//             { language: 'Francés' },
//             { language: 'Alemán' },
//             { language: 'Italiano' },
//             { language: 'Portugués' },
//             { language: 'Chino' },
//             { language: 'Japonés' },
//             { language: 'Coreano' },
//             { language: 'Ruso' },
//             { language: 'Árabe' },
//             { language: 'Hindi' },
//             { language: 'Bengalí' },
//             { language: 'Urdu' },
//             { language: 'Turco' },
//             { language: 'Persa' },
//             { language: 'Griego' },
//             { language: 'Hebreo' },
//             { language: 'Holandés' },
//             { language: 'Sueco' },
//             { language: 'Danés' },
//             { language: 'Noruego' },
//             { language: 'Finlandés' },
//             { language: 'Polaco' },
//             { language: 'Checo' },
//             { language: 'Húngaro' },
//             { language: 'Tailandés' },
//             { language: 'Vietnamita' },
//             { language: 'Filipino' },
//             { language: 'Malayo' },
//             { language: 'Indonesio' },
//             { language: 'Tamil' },
//             { language: 'Telugu' },
//             { language: 'Maratí' },
//             { language: 'Kannada' },
//             { language: 'Swahili' },
//             { language: 'Zulu' },
//             { language: 'Igbo' },
//             { language: 'Somalí' },
//             { language: 'Georgiano' },
//             { language: 'Ucraniano' },
//             { language: 'Eslovaco' },
//             { language: 'Serbio' },
//             { language: 'Croata' },
//             { language: 'Bosnio' },
//             { language: 'Búlgaro' },
//             { language: 'Romanés' },
//             { language: 'Letón' },
//             { language: 'Lituano' },
//             { language: 'Estonio' },
//             { language: 'Islandés' },
//             { language: 'Macedonio' }
//         ]
//         )
//             .then(() => {
//                 console.log('todo bien');
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     })
//     .catch((error) => {
//         console.error('Error al sincronizar el modelo:', error);
//     })



Language.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Language };