const { Sequelize, DataTypes } = require("sequelize");
const { Curse } = require("./curse");
const { Language } = require("./language");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Curse_language = sequelize.define("curse_language", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
});


// Relacion con otras tablas
Curse_language.belongsTo(Curse, { foreignKey: 'curseId' });
Curse_language.belongsTo(Language, { foreignKey: 'languageId' });


// Crear la tabla
// (async () => {
//     await Curse_language.sync({force: true});
// })();


Curse_language.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};



module.exports = { Curse_language }; 