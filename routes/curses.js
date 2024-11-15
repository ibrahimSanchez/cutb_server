const { Router } = require('express');
const {
    curseGet,
    cursePost,
    cursePut,
    curseDelete,
    getCurseById
} = require('../controllers/index');
const { existCurse } = require('../helpers/db-validators');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', curseGet);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    get by id   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/:id', [
    check('id').custom(existCurse),
    validateFields
], getCurseById);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    // validateJWT,
    // isProfesorRole,
    // hasRole('PROFESOR_ROLE'),
    check('name', 'El campo "name" es requerido').not().isEmpty(),
    check('startDate', 'El campo "startDate" es requerido').not().isEmpty(),
    check('endDate', 'El campo "endDate" es requerido').not().isEmpty(),
    check('prise', 'El campo "prise" es requerido').not().isEmpty(),
    check('email', 'El campo "email" es requerido').not().isEmpty(),
    check('providerId', 'El campo "providerId" es requerido').not().isEmpty(),
    check('curse_levelId', 'El campo "curse_levelId" es requerido').not().isEmpty(),
    validateFields
], cursePost);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    // validateJWT,
    // isProfesorRole,
    // hasRole('PROFESOR_ROLE'),
    check('id').custom(existCurse),
    validateFields
], cursePut);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    // validateJWT,
    // isProfesorRole,
    // hasRole('PROFESOR_ROLE'),
    check('id').custom(existCurse),
    validateFields
], curseDelete);





module.exports = router;



// http://localhost:8080/api/curses