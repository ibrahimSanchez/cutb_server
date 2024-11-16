const { Router } = require('express');
const { approveExam } = require('../controllers/index');
const { existExam } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');
const { validateJWT, isAdminRole } = require('../middlewares');



const router = Router();


module.exports = router;



// todo--------------------------------------------------------------------------------------
// todo------------------------------    approveExam   -------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    // validateJWT,
    // isAdminRole,
    check('id').custom(existExam),
    validateFields
], approveExam);



// http://localhost:8080/api/auth/approveExam

