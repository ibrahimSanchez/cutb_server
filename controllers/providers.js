const { Provider } = require("../models/provider");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const providerGet = async (req, res) => {

    try {
        const providers = await Provider.findAll();

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


module.exports = {
    providerGet
};