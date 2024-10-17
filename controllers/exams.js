const { Exam } = require("../models/exam");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const examGet = async (req, res) => {

    try {
        const exams = await Exam.findAll();

        res.json({
            exams
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


module.exports = {
    examGet
};