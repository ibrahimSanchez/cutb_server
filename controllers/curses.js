const { Curse } = require("../models/curse");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const curseGet = async (req, res) => {

    try {
        const curses = await Curse.findAll();

        res.json({
            curses
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


module.exports = {
    curseGet
};