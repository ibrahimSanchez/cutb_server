const { Router } = require('express');
const {
    curse_languageGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', curse_languageGet);


module.exports = router;



// http://localhost:8080/api/curse_languages