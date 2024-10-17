const { Router } = require('express');
const {
    exam_languageGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', exam_languageGet);


module.exports = router;



// http://localhost:8080/api/exam_languages