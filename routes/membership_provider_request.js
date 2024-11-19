const { Router } = require('express');
const {
    membership_provider_requestGet,
    membership_provider_requestPost,
    membership_provider_requestPut,
    membership_provider_requestDelete
} = require('../controllers/membership_provider_request');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isAdminRole } = require('../middlewares/validate-role');
const { validateJWT } = require('../middlewares/validate-jwt');
const { existMembership_provider_request } = require('../helpers/db-validators');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', membership_provider_requestGet);




// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    check('name', 'El campo "name" es requerido').not().isEmpty(),
    check('phone', 'El campo "phone" es requerido').not().isEmpty(),
    check('email', 'El campo "email" es requerido').not().isEmpty(),
    check('type', 'El campo "type" es requerido').not().isEmpty(),
    validateFields
], membership_provider_requestPost);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existMembership_provider_request),
    validateFields
], membership_provider_requestPut);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existMembership_provider_request),
    validateFields
], membership_provider_requestDelete);




module.exports = router;



// http://localhost:8080/api/membership_provider_requests