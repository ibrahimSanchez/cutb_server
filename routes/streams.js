const { Router } = require('express');
const {
    streamGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', streamGet);


module.exports = router;



// http://localhost:8080/api/streams