const { Router } = require('express');
const {
    providerGet,
    providerPost,
    providerPut,
    providerDelete
} = require('../controllers/index');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');
const { existProvider } = require('../helpers/db-validators');
const { isAdminRole, validateJWT } = require('../middlewares');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', providerGet);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    get by id   ----------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', [
    check('id').custom(existProvider),
    validateFields
], providerGet);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    validateJWT,
    isAdminRole,
    check('name', 'El campo "name" es requerido').not().isEmpty(),
    check('email', 'El campo "email" es requerido').not().isEmpty(),
    check('address', 'El campo "address" es requerido').not().isEmpty(),
    check('city', 'El campo "city" es requerido').not().isEmpty(),
    check('country', 'El campo "country" es requerido').not().isEmpty(),
    check('ReferencePerson', 'El campo "ReferencePerson" es requerido').not().isEmpty(),
    check('accreditedBy', 'El campo "accreditedBy" es requerido').not().isEmpty(),
    check('website', 'El campo "website" es requerido').not().isEmpty(),
    check('phone', 'El campo "phone" es requerido').not().isEmpty(),
    check('type', 'El campo "type" es requerido').not().isEmpty(),
    validateFields
], providerPost);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existProvider),
    validateFields
], providerPut);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existProvider),
    validateFields
], providerDelete);






module.exports = router;

// http://localhost:8080/api/providers