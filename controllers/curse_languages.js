const { Curse_language } = require('../models/curse_language');



// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const curse_languageGet = async (req, res) => {

    try {
        const curse_languages = await Curse_language.findAll();

        res.json({
            curse_languages
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


module.exports = {
    curse_languageGet
};