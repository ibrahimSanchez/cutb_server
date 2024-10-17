const { Language } = require("../models/language");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const languageGet = async (req, res) => {

    try {
        const languages = await Language.findAll();

        res.json({
            languages
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


module.exports = {
    languageGet
};