const { Sequelize, DataTypes } = require("sequelize");
const { Provider } = require("./provider");
const { Stream } = require("./stream");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Exam = sequelize.define("exam", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    topic: {
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
Exam.belongsTo(Provider, { foreignKey: 'providerId' });
Exam.belongsTo(Stream, { foreignKey: 'streamId' });




// Crear la tabla
// (async () => {
//     await Exam.sync({force: true});
// })();

Exam.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Exam }; 