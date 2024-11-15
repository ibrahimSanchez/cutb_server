const { Router } = require('express');
const { check } = require('express-validator');
const {
    curse_levelGet,
    getCurse_levelById
} = require('../controllers/index');
const { existCurse_level } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', curse_levelGet);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    get by id   ----------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/:id', [
    check('id').custom(existCurse_level),
    validateFields
], getCurse_levelById);

module.exports = router;



// http://localhost:8080/api/curse_levels