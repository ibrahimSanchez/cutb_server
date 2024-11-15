const { Curse } = require("../models/curse");
const { Curse_language } = require("../models/curse_language");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const curseGet = async (req, res) => {

    const providerId = req.header('x-providerId');

    try {
        if (!providerId) {
            const curses = await Curse.findAll({ order: ['id'], where: { state: true } });
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


// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get by id   ---------------------------------------
// todo--------------------------------------------------------------------------------------
const getCurseById = async (req, res) => {

    const { id } = req.params;

    try {
        const curse = await Curse.findByPk(id)

        res.json({
            curse
        });
    } catch (error) {
        // console.log(error);
        res.status(400).json({
            msg: 'Error al optener datos'
        });
    }
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const cursePost = async (req = request, res = response) => {
    let languageIds = req.header('x-languages');
    const data = req.body;

    try {
        if (typeof languageIds === 'string') {
            if (languageIds.startsWith('[')) {
                languageIds = JSON.parse(languageIds);
            } else {
                languageIds = languageIds.split(',').map(id => id.trim());
            }
        }

        if (!Array.isArray(languageIds)) {
            // console.error('Error: El encabezado x-languages debe contener un array de IDs de lenguajes');
            return res.status(400).json({ msg: 'El encabezado x-languages debe contener un array de IDs de lenguajes' });
        }

        const curse = await Curse.create(data);
        // console.log('Curso creado:', curse);

        // Crea una entrada en Curse_language para cada idioma
        const curseLanguages = languageIds.map(languageId => ({
            curseId: curse.id,
            languageId
        }));
        // console.log('Tuplas a insertar en Curse_language:', curseLanguages);

        // Inserta las tuplas en Curse_language
        if (curseLanguages.length > 0) {
            await Curse_language.bulkCreate(curseLanguages);
            // console.log('Tuplas insertadas en Curse_language');
        }

        res.json({
            msg: 'Operación exitosa',
            curse
        });
    } catch (error) {
        // console.error('Error en la operación:', error);
        res.status(500).json({ msg: 'Error en la operación', error: error.message });
    }
};





// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const cursePut = async (req = request, res = response) => {
    let languageIds = req.header('x-languages');
    const { id } = req.params;
    const { id: i, ...rest } = req.body;

    try {
        // Verificar que languageIds sea un array
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

        // Buscar y actualizar el curso
        const curse = await Curse.findByPk(id);
        if (!curse) {
            return res.status(404).json({ msg: 'Curso no encontrado' });
        }

        Object.assign(curse, rest);
        await curse.save();

        // Eliminar las relaciones existentes en Curse_language para el curso
        await Curse_language.destroy({ where: { curseId: id } });

        // Insertar nuevas relaciones en Curse_language
        const curseLanguages = languageIds.map(languageId => ({
            curseId: curse.id,
            languageId
        }));
        if (curseLanguages.length > 0) {
            await Curse_language.bulkCreate(curseLanguages);
        }

        res.json({
            msg: 'Operación exitosa',
            curse
        });
    } catch (error) {
        console.error('Error en la operación:', error);
        res.status(500).json({ msg: 'Error en la operación', error: error.message });
    }
};




// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
const curseDelete = async (req = request, res = response) => {

    const { id } = req.params;

    try {
        const curse = await Curse.findByPk(id);
        if (curse.state) {
            curse.state = false;
            await curse.save();

            res.json({
                msg: 'Operación exitosa',
                curse
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
    curseGet,
    getCurseById,
    cursePost,
    cursePut,
    curseDelete
};