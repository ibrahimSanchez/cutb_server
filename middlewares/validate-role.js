


const isAdminRole = async (req, res, next) => {

    if (!req.user)
        res.status(500).json({
            msg: 'Fallo en validacion del token'
        });


    const { role, name } = req.user;

    if (role != 'ADMIN_ROLE')
        res.status(401).json({
            msg: `${name} no es administrador`
        });


    next();

}

const isProfesorRole = async (req, res, next) => {

    if (!req.user)
        res.status(500).json({
            msg: 'Fallo en validacion del token'
        });


    const { role, name } = req.user;

    if (role != 'PROFESOR_ROLE')
        res.status(401).json({
            msg: `${name} no es profesor`
        });


    next();

}


const hasRole = (...roles) => {
    return (req, res, next) => {

        if (!req.user)
            res.status(500).json({
                msg: 'Fallo en validacion del token'
            });

        if (!roles.includes(req.user.role)) {
            res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles}`
            });
        }

        next();
    }

}



module.exports = {
    isAdminRole,
    hasRole,
    isProfesorRole
}