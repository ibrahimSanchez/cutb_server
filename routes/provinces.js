const { Router } = require('express');
const { provincesGet } = require('../controllers/provinces');


const router = Router();



// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
router.get('/', provincesGet);



module.exports = router;





// http://localhost:8080/api/provinces