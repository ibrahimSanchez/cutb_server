const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth');
const { validateFields } = require('../middlewares/index');
const { existUserName } = require('../helpers');


const router = Router();



router.post('/login', [
    check('password', 'El campo "password" es requerido').not().isEmpty(),
    check('userName').custom(existUserName),
    validateFields
], login);



module.exports = router;


// http://localhost:8080/api/auth/login