const { Exam } = require("../models/exam");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const examGet = async (req, res) => {

    const providerId = req.header('x-providerId');

    try {

        if (!providerId) {
            const exams = await Exam.findAll({ where: { state: true } });
            res.json({
                exams
            });
        }
        else {
            const exams = await Exam.findAll({
                where: { state: true, providerId: providerId }
            });
            res.json({
                exams
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
    examGet
};