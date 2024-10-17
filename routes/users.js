// const { check } = require('express-validator');
const { Router } = require('express');

// const { validateFields, validateJWT, isAdminRole, hasRole, validateArrayUsers } = require('../middlewares/index');

// const { existEmail, existUser, isRoleValid, isCiValid } = require('../helpers/index');

const {
    usersGet,
    // usersPut,
    // usersPost,
    // usersDelete,
    // getUserById,
    // usersArrayDelete
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', usersGet);



// // todo--------------------------------------------------------------------------------------
// // todo------------------------------    get by id   ----------------------------------------------
// // todo--------------------------------------------------------------------------------------
// router.get('/:id', [
//     check('id').custom(existUser),
//     validateFields
// ], getUserById);


// // todo--------------------------------------------------------------------------------------
// // todo------------------------------    post   ---------------------------------------------
// // todo--------------------------------------------------------------------------------------
// router.post('/', [
//     check('name', 'El campo "name" es requerido').not().isEmpty(),
//     check('ci', 'El campo "ci" es requerido').not().isEmpty(),
//     check('provinceId', 'El campo "provinceId" es requerido').not().isEmpty(),
//     check('municipalityId', 'El campo "municipalityId" es requerido').not().isEmpty(),
//     check('password', 'El campo "password" debe tener como minimo 8 caaracteres').isLength({ min: 8 }),
//     check('email', 'El campo "email" no es valido').isEmail(),
//     check('email').custom(existEmail),
//     check('ci').custom(isCiValid),
//     check('role').custom(isRoleValid),
//     validateFields
// ], usersPost);


// // todo--------------------------------------------------------------------------------------
// // todo------------------------------    put   ----------------------------------------------
// // todo--------------------------------------------------------------------------------------
// router.put('/:id', [
//     validateJWT,
//     isAdminRole,
//     hasRole('ADMIN_ROLE'),
//     check('id').custom(existUser),
//     check('role').custom(isRoleValid),
//     validateFields
// ], usersPut);


// // todo--------------------------------------------------------------------------------------
// // todo------------------------------    delete   -------------------------------------------
// // todo--------------------------------------------------------------------------------------
// router.delete('/:id', [
//     validateJWT,
//     isAdminRole,
//     hasRole('ADMIN_ROLE'),
//     check('id').custom(existUser),
//     validateFields
// ], usersDelete);

 
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