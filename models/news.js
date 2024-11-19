const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const News = sequelize.define("new", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    topic: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    date: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    content: {
        type: DataTypes.STRING(800),
        allowNull: false
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});




// Crear la tabla
// (async () => {
//     await News.sync({force: true});
// })();

News.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { News }; 