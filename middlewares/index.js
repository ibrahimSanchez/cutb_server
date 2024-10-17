
const validateFields = require('../middlewares/validate-fields');
const validateRole = require('../middlewares/validate-role');
const validateJWT = require('../middlewares/validate-jwt');
// const validateArrays = require('../middlewares/validate-arrays');

module.exports = {
    ...validateFields,
    ...validateRole,
    ...validateJWT,
    // ...validateArrays,
}