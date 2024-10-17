const { Router } = require('express');
const {
    curse_levelGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', curse_levelGet);


module.exports = router;



// http://localhost:8080/api/curse_levels