const { Router } = require('express');
const { approveCurse } = require('../controllers/index');
const { existCurse } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');
const { validateJWT, isAdminRole } = require('../middlewares');



const router = Router();


module.exports = router;


// todo--------------------------------------------------------------------------------------
// todo------------------------------    approveCurse   -------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    validateJWT,
    isAdminRole,
    check('id').custom(existCurse),
    validateFields
], approveCurse);


// http://localhost:8080/api/approveCurse 