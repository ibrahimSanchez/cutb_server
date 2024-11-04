const { Curse } = require("../models/curse");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const curseGet = async (req, res) => {

    const providerId = req.header('x-providerId');

    try {
        if (!providerId) {
            const curses = await Curse.findAll({ where: { state: true } });
            res.json({
                curses
            });
        }

        else {
            const curses = await Curse.findAll({
                where: { state: true, providerId: providerId }
            });
            res.json({
                curses
            });
        }
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