const { Router } = require('express');
const {
    rolesGet
} = require('../controllers/index');



const router = Router();

// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', rolesGet);


module.exports = router;



// http://localhost:8080/api/roles