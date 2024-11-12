const { Router } = require('express');
const {
    examGet,
    examPut,
    examPost,
    examDelete
} = require('../controllers/index');
const { existExam } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', examGet);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    // validateJWT,
    // isProfesorRole,
    // hasRole('PROFESOR_ROLE'),
    check('topic', 'El campo "topic" es requerido').not().isEmpty(),
    check('prise', 'El campo "prise" es requerido').not().isEmpty(),
    check('email', 'El campo "email" es requerido').not().isEmpty(),
    check('providerId', 'El campo "providerId" es requerido').not().isEmpty(),
    check('streamId', 'El campo "streamId" es requerido').not().isEmpty(),
    validateFields
], examPost);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    // validateJWT,
    // isProfesorRole,
    // hasRole('PROFESOR_ROLE'),
    check('id').custom(existExam),
    validateFields
], examPut);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    // validateJWT,
    // isProfesorRole,
    // hasRole('PROFESOR_ROLE'),
    check('id').custom(existExam),
    validateFields
], examDelete);




module.exports = router;



// http://localhost:8080/api/exams