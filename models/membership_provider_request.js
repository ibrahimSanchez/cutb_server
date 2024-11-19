const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Membership_provider_request = sequelize.define("membership_provider_request", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        validate: {
            isEmail: true
        }
    },

    address: {
        type: DataTypes.STRING(100),
        // allowNull: false,

    },

    additionalComments: {
        type: DataTypes.STRING(500),
        // allowNull: false,

    },

    phone: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },

    type: {
        type: DataTypes.STRING(100),
        defaultValue: 'member',
        validate: {
            isIn: [['member', 'provider']]
        }
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});



// Crear la tabla
// (async () => {
//     await Membership_provider_request.sync({force: true});
// })();

Membership_provider_request.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Membership_provider_request }; 