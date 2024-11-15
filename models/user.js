const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const User = sequelize.define("user", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    phone: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isIn: [['ADMIN_ROLE', 'ACTIVITY_MANAGER_ROLE']]
        }
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});



// Crear la tabla
// (async () => {
//     await User.sync({force: true});
// })();

User.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.password;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    // delete values.id;
    values.uid = id;
    return values;
};

module.exports = { User }; 