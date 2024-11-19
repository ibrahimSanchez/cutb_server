const { News } = require("../models/news");



// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const newsGet = async (req, res) => {

    try {
        const news = await News.findAll({ order: ['id'], where: { state: true } });

        res.json({
            news
        });
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
const getNewsById = async (req, res) => {

    const { id } = req.params;
    try {
        const news = await News.findByPk(id)

        res.json({
            news
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
const newsPost = async (req = request, res = response) => {

    const data = req.body;

    const news = new News(
        data
    );

    try {
        await news.save();
        res.json({
            msg: 'Operación exitosa',
            news
        })
    } catch (error) {
        console.log('error en la operación', error)
    }
}




// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const newsPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { id: i, ...rest } = req.body;

    try {
        const news = await News.findByPk(id);
        Object.assign(news, rest);
        await news.save();

        res.json({
            msg: 'Operación exitosa',
            news
        });

    } catch (error) {
        console.log('error en la operación', error)
    }
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
const newsDelete = async (req = request, res = response) => {

    const { id } = req.params;

    try {
        const news = await News.findByPk(id);
        if (news.state) {
            news.state = false;
            await news.save();

            res.json({
                msg: 'Operación exitosa',
                news
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
    newsGet,
    getNewsById,
    newsPost,
    newsPut,
    newsDelete
};
