const { check } = require('express-validator');
const { Router } = require('express');

// const { validateFields, validateJWT, isAdminRole, hasRole } = require('../middlewares/index');

const {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
} = require('../controllers/index');
const { isRoleValid, existUserNameAuth, existUser } = require('../helpers/db-validators');
const { validateJWT } = require('../middlewares/validate-jwt');
const { isAdminRole } = require('../middlewares/validate-role');
const { validateFields } = require('../middlewares');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', [
    validateJWT,
    isAdminRole,
    validateFields
], usersGet);



// // todo--------------------------------------------------------------------------------------
// // todo------------------------------    get by id   ----------------------------------------------
// // todo--------------------------------------------------------------------------------------
// router.get('/:id', [
//     check('id').custom(existUser),
//     validateFields
// ], getUserById);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    validateJWT,
    isAdminRole,
    check('name', 'El campo "name" es requerido').not().isEmpty(),
    check('userName', 'El campo "userName" es requerido').not().isEmpty(),
    check('phone', 'El campo "phone" es requerido').not().isEmpty(),
    check('password', 'El campo "password" debe tener como minimo 8 caaracteres').isLength({ min: 8 }),
    check('userName').custom(existUserNameAuth),
    check('role').custom(isRoleValid),
    validateFields
], usersPost);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existUser),
    check('role').custom(isRoleValid),
    validateFields
], usersPut);

 
// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existUser),
    validateFields
], usersDelete);


// // todo--------------------------------------------------------------------------------------
// // todo------------------------------    delete array   -------------------------------------
// // todo--------------------------------------------------------------------------------------
// router.delete('/', [
//     validateJWT,
//     isAdminRole,
//     validateArrayUsers,
//     hasRole('ADMIN_ROLE'),
//     validateFields
// ], usersArrayDelete);



module.exports = router;



// http://localhost:8080/api/users