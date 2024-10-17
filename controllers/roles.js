const { Role } = require('../models/role');



// todo--------------------------------------------------------------------------------------
// todo-------------------------------    get   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const rolesGet = async (req, res) => {

    try {
        const roles = await Role.findAll();

        res.json({
            roles
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'No se pudo optener los roles'
        });
    }
}


module.exports = {
    rolesGet
};