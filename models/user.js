const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const User = sequelize.define("user", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    ci: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },

    role: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isIn: [['ADMIN_ROLE', 'USER_ROLE', 'PROFESOR_ROLE']]
        }
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});


// // Relacion con otras tablas
// User.belongsTo(Province, { foreignKey: 'provinceId' });
// User.belongsTo(Municipality, { foreignKey: 'municipalityId' });



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