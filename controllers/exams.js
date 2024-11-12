const { Exam } = require("../models/exam");
const { Exam_language } = require("../models/exam_language");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const examGet = async (req, res) => {

    const providerId = req.header('x-providerId');

    try {

        if (!providerId) {
            const exams = await Exam.findAll({ order: ['id'], where: { state: true } });
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






// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const examPost = async (req = request, res = response) => {
    let languageIds = req.header('x-languages');
    const data = req.body;

    try {
        // Verificar si languageIds es un array válido
        if (typeof languageIds === 'string') {
            if (languageIds.startsWith('[')) {
                languageIds = JSON.parse(languageIds);
            } else {
                languageIds = languageIds.split(',').map(id => id.trim());
            }
        }

        if (!Array.isArray(languageIds)) {
            return res.status(400).json({ msg: 'El encabezado x-languages debe contener un array de IDs de lenguajes' });
        }

        // Crear el examen y obtener su ID
        const exam = await Exam.create(data);

        // Crear entradas en Exam_language para cada idioma
        const examLanguages = languageIds.map(languageId => ({
            examId: exam.id,
            languageId
        }));

        // Insertar las tuplas en Exam_language
        if (examLanguages.length > 0) {
            await Exam_language.bulkCreate(examLanguages);
        }

        res.json({
            msg: 'Operación exitosa',
            exam
        });
    } catch (error) {
        console.error('Error en la operación:', error);
        res.status(500).json({ msg: 'Error en la operación', error: error.message });
    }
};





// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const examPut = async (req = request, res = response) => {
    let languageIds = req.header('x-languages');
    const { id } = req.params;
    const { id: i, ...rest } = req.body;

    try {
        // Verificar si languageIds es un array válido
        if (typeof languageIds === 'string') {
            if (languageIds.startsWith('[')) {
                languageIds = JSON.parse(languageIds);
            } else {
                languageIds = languageIds.split(',').map(id => id.trim());
            }
        }

        if (!Array.isArray(languageIds)) {
            return res.status(400).json({ msg: 'El encabezado x-languages debe contener un array de IDs de lenguajes' });
        }

        // Buscar y actualizar el examen
        const exam = await Exam.findByPk(id);
        if (!exam) {
            return res.status(404).json({ msg: 'Examen no encontrado' });
        }

        Object.assign(exam, rest);
        await exam.save();

        // Eliminar las relaciones existentes en Exam_language para el examen
        await Exam_language.destroy({ where: { examId: id } });

        // Insertar nuevas relaciones en Exam_language
        const examLanguages = languageIds.map(languageId => ({
            examId: exam.id,
            languageId
        }));
        if (examLanguages.length > 0) {
            await Exam_language.bulkCreate(examLanguages);
        }

        res.json({
            msg: 'Operación exitosa',
            exam
        });
    } catch (error) {
        console.error('Error en la operación:', error);
        res.status(500).json({ msg: 'Error en la operación', error: error.message });
    }
};



// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
const examDelete = async (req = request, res = response) => {

    const { id } = req.params;

    try {
        const exam = await Exam.findByPk(id);
        if (exam.state) {
            exam.state = false;
            await exam.save();

            res.json({
                msg: 'Operación exitosa',
                exam
            });
        } else
            res.status(404).json({
                msg: 'Los datos no se encuentran en la BD'
            });

    } catch (error) {
        console.log('error en la operación', error)
    }
}




module.exports = {
    examGet,
    examPost,
    examPut,
    examDelete
};