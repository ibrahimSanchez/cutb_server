const { Provider } = require("../models/provider");



// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const providerGet = async (req, res) => {

    try {
        const providers = await Provider.findAll({ order: ['id'], where: { state: true } });

        res.json({
            providers
        });
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
const providerPost = async (req = request, res = response) => {

    const data = req.body;

    const provider = new Provider(
        data
    );

    try {
        await provider.save();
        res.json({
            msg: 'Operación exitosa',
            provider
        })
    } catch (error) {
        console.log('error en la operación', error)
    }
}




// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const providerPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { id: i, ...rest } = req.body;

    try {
        const provider = await Provider.findByPk(id);
        Object.assign(provider, rest);
        await provider.save();

        res.json({
            msg: 'Operación exitosa',
            provider
        });

    } catch (error) {
        console.log('error en la operación', error)
    }
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
const providerDelete = async (req = request, res = response) => {

    const { id } = req.params;

    try {
        const provider = await Provider.findByPk(id);
        if (provider.state) {
            provider.state = false;
            await provider.save();

            res.json({
                msg: 'Operación exitosa',
                provider
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
    providerGet,
    providerPost,
    providerPut,
    providerDelete
};
