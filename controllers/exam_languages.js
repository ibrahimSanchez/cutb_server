const { Exam_language } = require("../models/exam_language");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const exam_languageGet = async (req, res) => {

    try {
        const exam_languages = await Exam_language.findAll();

        res.json({
            exam_languages
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


module.exports = {
    exam_languageGet
};