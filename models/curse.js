const { Sequelize, DataTypes } = require("sequelize");
const { Provider } = require("./provider");
const { Curse_level } = require("./curse_level");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Curse = sequelize.define("curse", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    startDate: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    endDate: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    prise: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        validate: {
            isEmail: true
        }
    },


    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});



// Relacion con otras tablas
Curse.belongsTo(Provider, { foreignKey: 'providerId' });
Curse.belongsTo(Curse_level, { foreignKey: 'curse_levelId' });




// Crear la tabla
// (async () => {
//     await Curse.sync({force: true});
// })();

Curse.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Curse }; 