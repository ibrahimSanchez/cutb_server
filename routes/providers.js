const { Router } = require('express');
const {
    providerGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', providerGet);


module.exports = router;



// http://localhost:8080/api/providers