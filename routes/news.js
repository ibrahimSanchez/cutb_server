const { Router } = require('express');
const {
    newsGet,
    newsPost,
    getNewsById,
    newsPut,
    newsDelete
} = require('../controllers/index');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');
const { existNews } = require('../helpers/db-validators');
const { isActivityManagerRole, validateJWT } = require('../middlewares');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', newsGet);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    get by id   ----------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/:id', [
    check('id').custom(existNews),
    validateFields
], getNewsById);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
router.post('/', [
    validateJWT,
    isActivityManagerRole,
    check('topic', 'El campo "topic" es requerido').not().isEmpty(),
    check('date', 'El campo "date" es requerido').not().isEmpty(),
    check('content', 'El campo "content" es requerido').not().isEmpty(),
    validateFields
], newsPost);



// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.put('/:id', [
    validateJWT,
    isActivityManagerRole,
    check('id').custom(existNews),
    validateFields
], newsPut);


// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
router.delete('/:id', [
    validateJWT,
    isActivityManagerRole,
    check('id').custom(existNews),
    validateFields
], newsDelete);






module.exports = router;

// http://localhost:8080/api/news