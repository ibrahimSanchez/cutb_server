const { Router } = require('express');
const {
    languageGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', languageGet);


module.exports = router;



// http://localhost:8080/api/languages