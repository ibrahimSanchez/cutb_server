
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');



const validateJWT = async (req, res, next) => {

    const token = req.header('x-token');

    if (!token)
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });


    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const user = await User.findByPk(uid);

        if (!user)
            res.status(401).json({
                msg: 'Token no valido'
            });

        if (!user.state)
            res.status(401).json({
                msg: 'Token no valido'
            });

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
}


module.exports = {
    validateJWT
}