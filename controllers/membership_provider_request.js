const { Membership_provider_request } = require("../models/membership_provider_request");




// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const membership_provider_requestGet = async (req, res) => {

    try {
        const membership_provider_request = await Membership_provider_request.findAll({
            order: ['id'],
            where: { state: true }
        });

        res.json({
            membership_provider_request
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
const membership_provider_requestPost = async (req = request, res = response) => {

    const { name, email, phone, address, additionalComments, type } = req.body;
    const membership_provider_request = new Membership_provider_request({
        name, email, phone, address, additionalComments, type
    });

    try {
        await membership_provider_request.save();
        res.json({
            msg: 'Datos almacenados',
            membership_provider_request
        })
    } catch (error) {
        console.log('error en el post', error)
    }
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const membership_provider_requestPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { id: i, ...rest } = req.body;


    try {
        const membership_provider_request = await Membership_provider_request.findByPk(id);
        Object.assign(membership_provider_request, rest);
        await membership_provider_request.save();

        res.json({
            msg: 'UDatos modificado',
            membership_provider_request
        });

    } catch (error) {
        console.log('error en el put', error)
    }
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
const membership_provider_requestDelete = async (req = request, res = response) => {

    const { id } = req.params;

    const { user: userAuth } = req;

    try {

        const membership_provider_request = await Membership_provider_request.findByPk(id);
        if (membership_provider_request.state) {
            membership_provider_request.state = false;
            await membership_provider_request.save();

            res.json({
                msg: 'Datos eliminados',
                membership_provider_request,
                userAuth
            });
        } else
            res.status(404).json({
                msg: 'Los datos no están almacenados en la BD'
            });

    } catch (error) {
        console.log('error en el delete', error)
    }
}



module.exports = {
    membership_provider_requestGet,
    membership_provider_requestPost,
    membership_provider_requestPut,
    membership_provider_requestDelete
};