const { Curse_level } = require('../models/curse_level');



// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const curse_levelGet = async (req, res) => {

    try {
        const curse_levels = await Curse_level.findAll();

        res.json({
            curse_levels
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get by id   ---------------------------------------
// todo--------------------------------------------------------------------------------------
const getCurse_levelById = async (req, res) => {

    const { id } = req.params;

    try {
        const curse_level = await Curse_level.findByPk(id)

        res.json({
            curse_level
        });
    } catch (error) {
        // console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}



module.exports = {
    curse_levelGet,
    getCurse_levelById
};