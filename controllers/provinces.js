const { Province } = require("../models/province");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const provincesGet = async (req, res) => {

    try {
        const provinces = await Province.findAll();

        res.json({
            provinces
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'No se pudo optener las provincias'
        });
    }
}


module.exports = {
    provincesGet
};