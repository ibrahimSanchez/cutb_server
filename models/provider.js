const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Provider = sequelize.define("provider", {

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
        allowNull: false,

    },

    city: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },
    
    country: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },

    ReferencePerson: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },

    accreditedBy: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },
    
    website: {
        type: DataTypes.STRING(100),
        allowNull: false,

    },

    phone: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },

    type: {
        type: DataTypes.STRING(100),
        defaultValue: 'curse_provided',
        validate: {
            isIn: [['exam_provided', 'exam_provided']]
        }
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});


// Relacion con otras tablas
// Provider.belongsTo(Province, { foreignKey: 'provinceId' });
// Provider.belongsTo(Municipality, { foreignKey: 'municipalityId' });



// Crear la tabla
// (async () => {
//     await Provider.sync({force: true});
// })();

Provider.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};

module.exports = { Provider }; 