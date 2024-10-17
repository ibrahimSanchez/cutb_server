const { Sequelize, DataTypes } = require("sequelize");
const { Language } = require("./language");
const { Exam } = require("./exam");
const sequelize = new Sequelize(`${process.env.CONNECTION_DB}`);


const Exam_language = sequelize.define("exam_language", {

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
Exam_language.belongsTo(Exam, { foreignKey: 'examId' });
Exam_language.belongsTo(Language, { foreignKey: 'languageId' });


// Crear la tabla
// (async () => {
//     await Exam_language.sync({force: true});
// })();


Exam_language.prototype.toJSON = function () {
    const values = { ...this.get() };
    const id = values.id;
    delete values.updatedAt;
    delete values.createdAt;
    delete values.state;
    delete values.id;
    values.uid = id;
    return values;
};



module.exports = { Exam_language }; 