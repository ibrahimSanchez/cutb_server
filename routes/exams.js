const { Router } = require('express');
const {
    examGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', examGet);


module.exports = router;



// http://localhost:8080/api/exams