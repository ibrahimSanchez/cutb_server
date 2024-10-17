const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const { User } = require('../models/user');
const { createJWT } = require('../helpers/index');


const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ where: { email } });

        // verificar email
        if (!user)
            return res.status(400).json({
                msg: 'Email o password incorrectos'
            });

        // usuario activo
        if (!user.state)
            return res.status(400).json({
                msg: 'Email o password incorrectos'
            });

        // verificar password
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword)
            return res.status(400).json({
                msg: 'Email o password incorrectos'
            });

        // generar el jwt 
        const token = await createJWT(user.id);

        res.json({
            user,
            token
        });

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            msg: 'Algo salio mal',
        });
    }
}




module.exports = {
    login
};