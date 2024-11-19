const { Router } = require('express');
const {
    certification_recordsGet,
    certification_recordPost,
    certification_recordPut,
    certification_recordDelete
} = require('../controllers/index');
const { validateJWT } = require('../middlewares/validate-jwt');
const { isActivityManagerRole } = require('../middlewares/validate-role');
const { validateFields } = require('../middlewares/validate-fields');
const { existCertification_record } = require('../helpers/db-validators');
const { check } = require('express-validator');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', certification_recordsGet);




// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    validateJWT,
    isActivityManagerRole,
    check('name', 'El campo "name" es requerido').not().isEmpty(),
    check('certification', 'El campo "certification" es requerido').not().isEmpty(),
    check('date', 'El campo "date" es requerido').not().isEmpty(),
    check('level', 'El campo "level" es requerido').not().isEmpty(),
    validateFields
], certification_recordPost);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    validateJWT,
    isActivityManagerRole,
    check('id').custom(existCertification_record),
    validateFields
], certification_recordPut);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    validateJWT,
    isActivityManagerRole,
    check('id').custom(existCertification_record),
    validateFields
], certification_recordDelete);







module.exports = router;



// http://localhost:8080/api/certification_records