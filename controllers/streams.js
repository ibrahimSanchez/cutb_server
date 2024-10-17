const { Stream } = require("../models/stream");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const streamGet = async (req, res) => {

    try {
        const streams = await Stream.findAll();

        res.json({
            streams
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


module.exports = {
    streamGet
};