const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Certification_record = sequelize.define("certification_record", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    date: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    certification: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    
    level: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});



// Crear la tabla
// (async () => {
//     await Certification_record.sync({force: true});
// })();

Certification_record.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Certification_record }; 