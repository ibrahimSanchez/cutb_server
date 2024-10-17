const { Router } = require('express');
const {
    curseGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', curseGet);


module.exports = router;



// http://localhost:8080/api/curses