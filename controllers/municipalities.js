const { Municipality } = require("../models/municipality");


// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const municipalitiesGet = async (req, res) => {

    try {
        const municipalities = await Municipality.findAll();

        res.json({
            municipalities
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'No se pudo optener los municipios'
        });
    }
}
 

module.exports = {
    municipalitiesGet
};